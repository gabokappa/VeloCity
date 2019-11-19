
class Api::V1::StravaController < ApplicationController
  # TODO need to check this line isn't dangerous.  Fixed it falling over with
  # "Can't verify CSRF token authenticity." Error
  before_action :check_login, only: %i[find_bikes refresh_bikes]
  protect_from_forgery with: :null_session

  def index
  end

  def create

  end

  def show
  end

  def destroy
  end

  # Newly Authorised User - update all fields on table
  def authorize

    if Rails.env.production?
      @clientid = '40928'
      @clients = 'dc6d5affd7d09115b0cd36e8f325b11d0125dfbd'
    else
      @clientid = '40250'
      @clients = '700b02392cd20d926d066de6a28601acb90772a8'
    end

    response = RestClient.post 'https://www.strava.com/oauth/token', { client_id: @clientid, client_secret: @clients, code: params["code"], grant_type: 'authorization_code' }
    json = JSON.parse(response)
    user = User.find_by(id: params["user_id"])
    user.update(strava_id: json['athlete']['id'], access_token: json['access_token'], access_token_expiry: Time.at(json['expires_at']), refresh_token: json['refresh_token'])
    redirect_to root_url
  end

  # Called to find all bikes used in the last period of time
  def find_bikes
    user_id = params["user_id"]
    bike_ids = get_bike_ids(user_id)
    bikes = []
    bike_ids.each {|bike_id|
      bikes.push(get_bike(bike_id, user_id))
    }
    update_bike_database(bikes, user_id)
    render json: { new_bikes: bikes }
  end

  # Calls Strava and refreshes bike milage with results
  def refresh_bikes
    bike_ids = params["bike_ids"].split(',')
    user_id = params["user_id"]

    bike_ids.each {|bike_id|
      strava_bike = get_bike(bike_id, user_id)
      bike = Bike.find_by(strava_gear_id: bike_id)
      bike.update(distance_done: strava_bike["distance"])
    }
  end

  private

  def update_bike_database(bikes, user_id)
    logged_bikes = Bike.where(user_id: user_id)
    logged_bike_ids = []
    logged_bikes.each do |logged_bike_obj|
      logged_bike_ids.push(logged_bike_obj["strava_gear_id"])
    end

    bikes.each do |strava_bike|
      if logged_bike_ids.include?(strava_bike["id"]) == false
        Bike.create(bike_name: strava_bike["name"], distance_done: strava_bike["distance"], user_id: user_id, strava_gear_id: strava_bike["id"], frame_type: strava_bike["frame_type"])
      end
    end
  end

  # Gets a unique list of bike ID's
  def get_bike_ids(user_id)
    user = User.find_by(id: user_id)
    authorize_time_check(user)
    response = RestClient.get('https://www.strava.com/api/v3/athlete/activities?per_page=200', {Authorization: 'Bearer ' + user.access_token})
    json = JSON.parse(response)
    bike_ids = []
    json.each { |activity|
      if activity["gear_id"] && activity["gear_id"][0] == "b"
        bike_ids.push(activity["gear_id"])
      end }
    bike_ids.uniq!
    bike_ids
  end

  # Gets the name and milage for a specific bike
  def get_bike(bikeID, userID)
    user = User.find_by(id: userID)
    authorize_time_check(user)
    response = RestClient.get('https://www.strava.com/api/v3/gear/'+bikeID, {Authorization: 'Bearer ' + user.access_token})
    bike = JSON.parse(response)
  end

  # Checks that the users authorisation code hasn't expired
  def authorize_time_check(user)

    if (user.access_token_expiry < Time.now)
      refresh_authorisation(user)
    end
  end

  # If required, gets new authorisation code and refresh token
  def refresh_authorisation(user)

    if Rails.env.production?
      @clientid = '40928'
      @clients = 'dc6d5affd7d09115b0cd36e8f325b11d0125dfbd'
    else
      @clientid = '40250'
      @clients = '700b02392cd20d926d066de6a28601acb90772a8'
    end

    response = RestClient.post 'https://www.strava.com/api/v3/oauth/token', { client_id: @clientid, client_secret: @clients, grant_type: 'refresh_token', refresh_token: user.refresh_token }
    json = JSON.parse(response)
    user.update(access_token: json['access_token'], access_token_expiry: Time.at(json['expires_at']), refresh_token: json['refresh_token'])
  end
end
