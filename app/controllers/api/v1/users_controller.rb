class Api::V1::UsersController < ApplicationController
  def index
    users = User.all.order(created_at: :desc)
    render json: users
  end

  def create; end

  def show; end

  def destroy; end
end
