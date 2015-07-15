class Api::HousesController < Api::ApiController

  def create
    @house = House.new(house_params)
    if @house.save
      render json: @house
    else
      render json: @house.errors, status: :unprocessable_entity
    end
  end


  # more about showing the house's houses
  def show
    @house = House.includes(:watchings).find(params[:id])
    render json: { house: @house, watchings_count: @house.watchings.size }
  end

  private
  def house_params
    params
      .require(:house)
      .permit(:description, :address, :zillow_prop_id, :price)
  end
end
