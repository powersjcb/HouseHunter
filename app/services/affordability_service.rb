class AffordabilityService
  include HTTParty
  base_uri 'http://www.zillow.com/webservice/mortgage/CalculateAffordability.htm'

  def initialize(income, monthlydebts, downpayment)
    @options = { query: {
      'zws-id' => Figaro.env.ZWSID,
      annualincome: income,
      monthlydebts: monthlydebts,
      down: downpayment
    }}
    self
  end

  def get
    res = self.class.get( "", @options)
    if res
      return res
    end
    nil
  end

end
