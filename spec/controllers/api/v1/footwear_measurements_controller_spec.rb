# spec/controllers/api/v1/footwear_measurements_controller_spec.rb
require 'rails_helper'

RSpec.describe Api::V1::FootwearMeasurementsController, type: :controller do
  let(:user) { create(:user) }
  
  before do
    sign_in user
  end

  describe 'GET #index' do
    let!(:measurements) { create_list(:footwear_measurement, 3, user: user) }

    it 'returns all footwear measurements' do
      get :index
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).length).to eq(3)
    end
  end

  describe 'POST #create' do
    let(:valid_params) do
      {
        measurement: {
          height: 170.5,
          weight: 70.2,
          foot_length: 26.5,
          foot_width: 9.8,
          arch_height: 3.2,
          arch_type: 'medium'
        }
      }
    end

    it 'creates a new footwear measurement' do
      expect {
        post :create, params: valid_params
      }.to change(FootwearMeasurement, :count).by(1)
      expect(response).to have_http_status(:created)
    end

    it 'validates arch type' do
      invalid_params = valid_params
      invalid_params[:measurement][:arch_type] = 'invalid'
      post :create, params: invalid_params
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end
end
