class Api::MortgageProxyController < Api::ApiController

  def show
    query = AffordabilityService.new(
      params[:annualincome].to_i,
      params[:monthlydebts].to_i,
      params[:downpayment].to_i
    )
    res = query.get

    render json: res
  end

end
