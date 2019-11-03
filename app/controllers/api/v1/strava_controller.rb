

class Api::V1::StravaController < ApplicationController
  # TODO need to check this line isn't dangerous.  Fixed it falling over with
  # "Can't verify CSRF token authenticity." Error
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
    response = RestClient.post 'https://www.strava.com/oauth/token', { client_id: '40250', client_secret: '700b02392cd20d926d066de6a28601acb90772a8', code: params["code"], grant_type: 'authorization_code' }
    json = JSON.parse(response)
    # TODO - hardcoded user ID
    user = User.find_by(id: '1')
    user.update(strava_id: json['athlete']['id'], access_token: json['access_token'], access_token_expiry: Time.at(json['expires_at']), refresh_token: json['refresh_token'])
    redirect_to root_url
  end

  # Called to find all bikes used in the last period of time
  def find_bikes
    bike_ids = get_bike_ids()
    bikes = []
    bike_ids.each {|bike_id|
      bikes.push(get_bike(bike_id))
    }
    render json: { new_bikes: bikes }
  end

  # Calls Strava and refreshes bike milage with results
  def refresh_bikes
    bike_ids = params["bike_ids"].split(',')
    bike_ids.each {|bike_id|
      bike = get_bike(bike_id)
      # TODO add strava bike id to table
      # Bike.find_by(strava_id: bike_id)
      Bike.find_by(id: '1')
      Bike.update(distance_done: bike["distance"])
    }
  end

  private

  # Gets a unique list of bike ID's
  def get_bike_ids()
    # TODO - hardcoded user ID
    user = User.find_by(id: '1')
    authorize_time_check(user)
    response = RestClient.get('https://www.strava.com/api/v3/athlete/activities?per_page=200', {Authorization: 'Bearer ' + user.access_token})
    json = JSON.parse(response)
    bike_ids = []
    json.each { |activity|
      if activity["gear_id"] && activity["gear_id"][0] == "b"
        bike_ids.push(activity["gear_id"])
      end }
    bike_ids.uniq!
  end

  # Gets the name and milage for a specific bike
  def get_bike(bikeID)
    # TODO - hardcoded user ID
    user = User.find_by(id: '1')
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
    response = RestClient.post 'https://www.strava.com/api/v3/oauth/token', { client_id: '40250', client_secret: '700b02392cd20d926d066de6a28601acb90772a8', grant_type: 'refresh_token', refresh_token: user.refresh_token }
    json = JSON.parse(response)
    # TODO - hardcoded user ID
    user.update(access_token: json['access_token'], access_token_expiry: Time.at(json['expires_at']), refresh_token: json['refresh_token'])
  end 
end
