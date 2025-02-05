# spec/controllers/api/v1/eyewear_measurements_controller_spec.rb
require 'rails_helper'

RSpec.describe Api::V1::EyewearMeasurementsController, type: :controller do
  let(:user) { create(:user) }
  
  before do
    sign_in user
  end

  describe 'GET #index' do
    let!(:measurements) { create_list(:eyewear_measurement, 3, user: user) }

    it 'returns all eyewear measurements' do
      get :index
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).length).to eq(3)
    end
  end