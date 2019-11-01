

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
    code = params["code"]
    response = RestClient.post 'https://www.strava.com/oauth/token', { client_id: '40250', client_secret: '700b02392cd20d926d066de6a28601acb90772a8', code: code, grant_type: 'authorization_code' }
    json = JSON.parse(response)
    p "Hello " + json['athlete']['firstname']
    redirect_to root_url
  end
end
