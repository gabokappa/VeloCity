class Api::V1::BikesController < ApplicationController
  def index
    bikes = Bike.where("user_id = #{params[:user_id]}")
    bikeComponent = []
    bikes.each do |bike|
      bikeComponent.push([bike, Component.where("bike_id = #{bike.id}")])
    end
    render json: bikeComponent
  end

  def create
  end

  def show
    bike = Bike.find(params[:id])
    components = Component.where("bike_id = #{bike.id}")
    render json: {bike:bike, components:components}
  end

  def destroy
  end
end
