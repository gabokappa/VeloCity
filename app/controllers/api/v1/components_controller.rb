class Api::V1::ComponentsController < ApplicationController
  def index
    components = Component.all
    render json: components 
  end

  def create
  end

  def show
  end

  def destroy
  end
end
