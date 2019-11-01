

class Api::V1::StravaController < ApplicationController
  def index
  end

  def create

  end

  def show
  end

  def destroy
  end

  def authorize
    response = RestClient.post 'https://www.strava.com/oauth/token', { client_id: '40250', client_secret: '700b02392cd20d926d066de6a28601acb90772a8', code: params["code"], grant_type: 'authorization_code' }
    json = JSON.parse(response)
    # TO DO
    user = User.find_by(id: '1')
    ########
    user.update(strava_id: json['athlete']['id'], access_token: json['access_token'], access_token_expiry: Time.at(json['expires_at']), refresh_token: json['refresh_token'])
    redirect_to root_url
  end
end
