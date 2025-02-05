# spec/controllers/api/v1/accessory_measurements_controller_spec.rb
require 'rails_helper'

RSpec.describe Api::V1::AccessoryMeasurementsController, type: :controller do
  let(:user) { create(:user) }
  
  before do
    sign_in user
  end

  describe 'GET #index' do
    let!(:measurements) { create_list(:accessory_measurement, 3, user: user) }

    it 'returns all accessory measurements' do
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
          wrist_circumference: 16.5,
          wrist_width: 5.8
        }
      }
    end

    it 'creates a new accessory measurement' do
      expect {
        post :create, params: valid_params
      }.to change(AccessoryMeasurement, :count).by(1)
      expect(response).to have_http_status(:created)
    end
  end
end