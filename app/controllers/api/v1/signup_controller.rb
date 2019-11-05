class Api::V1::SignupController < ApplicationController
  protect_from_forgery with: :null_session
  def index; end

  def create
    p 'IN THE CREATE FUNCTION'
    p params
    p 'BEFORE THE CREATE CALL'
    @user = User.create(email: params['email'], password: params['password'],
                first_name: params['first_name'], sur_name: params['sur_name'])
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def show; end

  def login_check
    p 'THis has been called'
    p params['email']
  end
end

# TODO: Delete all prints to the console