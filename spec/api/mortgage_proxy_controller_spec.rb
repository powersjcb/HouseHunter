require 'rails_helper'

RSpec.describe Api::MortgageProxyController, type: :controller do
  describe 'GET #show' do
    let(:query_string) {
      {
        annualincome: 100000,
        monthlydebts: 500,
        downpayment: 90000
      }
    }
    it "responds successfully with an HTTP 200 status code" do
      get :show
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "renders a JSON response with blank input" do
      get :show
      expect(ActiveSupport::JSON.decode(response.body)).not_to be_nil
    end

    it 'returns a response from zillow with valid input' do
      get :show, query_string
      expect(ActiveSupport::JSON.decode(response.body)).not_to be_nil
    end

    it 'returns a response from zillow with results' do
      get :show, query_string
      a = ActiveSupport::JSON.decode(response.body)
      affordability = a['affordabilitydetails']['response']['affordabilityamount']
      expect(affordability).not_to be_nil
    end
  end
end
