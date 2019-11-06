class Api::V1::ComponentsController < ApplicationController
  def index
    components = Component.all
    render json: components
  end

  def create
    @part = Component.create(comp_name: params['comp_name'], distance_done: params['distance_done'],
                             max_distance: params['max_distance'], bike_id: params['bike_id'], start_distance: params['start_distance'])
    if @part.save
      render json: @part, status: :created
    else
      render json: @part.errors, status: :unprocessable_entity
    end

  end

  def show
    components = Component.where("bike_id = #{params[:bike_id]}")
    render json: components
  end

  def destroy
    p 'In the destroy function ***********'
    part = Component.find(params['comp_id'])
    part.destroy
    p 'OUT OF THE FUNCTION'
    head 204
  end
end
