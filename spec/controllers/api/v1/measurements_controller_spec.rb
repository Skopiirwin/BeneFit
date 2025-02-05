# spec/controllers/api/v1/measurements_controller_spec.rb
require 'rails_helper'

RSpec.describe Api::V1::MeasurementsController, type: :controller do
  let(:user) { create(:user) }
  
  before do
    sign_in user
  end

  describe 'GET #index' do
    let!(:clothing_measurement) { create(:measurement, :with_clothing_measurements, user: user) }
    let!(:eyewear_measurement) { create(:eyewear_measurement, user: user) }
    
    it 'returns measurements for the current user' do
      get :index
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).length).to eq(2)
    end

    it 'filters by measurement type' do
      get :index, params: { measurement_type: 'eyewear' }
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).length).to eq(1)
    end
  end

  describe 'GET #recent_by_type' do
    before do
      create_list(:eyewear_measurement, 3, user: user, created_at: 1.day.ago)
      create(:eyewear_measurement, user: user, created_at: Time.current)
    end

    it 'returns the 5 most recent measurements of specified type' do
      get :recent_by_type, params: { type: 'eyewear' }
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).length).to eq(4)
    end
  end

  describe 'POST #create' do
    context 'with eyewear measurements' do
      let(:valid_params) do
        {
          measurement: {
            measurement_type: 'eyewear',
            height: 170.5,
            weight: 70.2,
            face_width: 14.2,
            temple_length: 13.8,
            bridge_width: 2.3,
            face_shape: 'oval'
          }
        }
      end

      it 'creates a new eyewear measurement' do
        expect {
          post :create, params: valid_params
        }.to change(EyewearMeasurement, :count).by(1)
        expect(response).to have_http_status(:created)
      end

      it 'returns error for invalid params' do
        post :create, params: { measurement: { measurement_type: 'eyewear' } }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context 'with footwear measurements' do
      let(:valid_params) do
        {
          measurement: {
            measurement_type: 'footwear',
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
    end
  end

  describe 'PUT #update' do
    let(:measurement) { create(:eyewear_measurement, user: user) }

    it 'updates the measurement' do
      put :update, params: {
        id: measurement.id,
        measurement: { face_shape: 'round' }
      }
      expect(response).to have_http_status(:success)
      expect(measurement.reload.face_shape).to eq('round')
    end
  end

  describe 'DELETE #destroy' do
    let!(:measurement) { create(:eyewear_measurement, user: user) }

    it 'deletes the measurement' do
      expect {
        delete :destroy, params: { id: measurement.id }
      }.to change(EyewearMeasurement, :count).by(-1)
      expect(response).to have_http_status(:no_content)
    end
  end
end