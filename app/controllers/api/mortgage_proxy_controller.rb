class Api::MortgageProxyController < Api::ApiController

  def show
    query = AffordabilityService.new(
      params[:annualincome],
      params[:monthlydebts],
      params[:down]
    )
    res = query.get

    render json: res
  end

end
