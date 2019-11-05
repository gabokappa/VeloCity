class Api::V1::BikesController < ApplicationController
  before_action :check_login, only: %i[create index show destroy]
  def index
    bikes = Bike.where(user_id: params[:user_id])
    bike_parts = []
    bikes.each { |b| bike_parts.push([b, Component.where(bike_id: b.id)]) }
    render json: bike_parts
  end

  def create; end

  def show
    bike = Bike.find(params[:bike_id])
    components = Component.where(bike_id: bike.id)
    render json: { bike: bike, components: components }

  end

  def destroy; end
end
