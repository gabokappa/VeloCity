class Api::V1::BikesController < ApplicationController
  def index
    bikes = Bike.all
    render json: bikes
  end

  def create
  end

  def show
  end

  def destroy
  end
end
