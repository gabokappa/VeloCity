class Api::V1::SignupController < ApplicationController
  protect_from_forgery with: :null_session
  def index
  end

  def create
  end

  def show
  end

  def login_check
    p 'THis has been called'
    p params["email"]

  end

end
