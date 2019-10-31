class Api::V1::ComponentsController < ApplicationController
  def index
    components = Component.all
    render json: components 
  end

  def create
  end

  def show
    components = Component.where("bike_id = #{params[:bike_id]}")
    render json: components 
  end

  def destroy
  end
end
