

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
    p "start"
  response = RestClient.post 'https://www.strava.com/oauth/token', { client_id: '40250', client_secret: '700b02392cd20d926d066de6a28601acb90772a8', code: 'b3cd27673ccd4503e0c29be70b7d762260a8cd0e', grant_type: 'authorization_code' }
  p JSON.parse(response)
    redirect_to root_url
  end
end
