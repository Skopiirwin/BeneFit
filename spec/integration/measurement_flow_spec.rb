# spec/integration/measurement_flow_spec.rb
require 'rails_helper'

RSpec.describe "Measurement Flow", type: :request do
  let(:user) { create(:user) }
  let(:headers) { valid_auth_headers_for(user) }

  describe 'Complete measurement flow' do
    context 'eyewear measurements' do
      let(:valid_params) do
        {
          measurement: {
            face_width: 14.2,
            temple_length: 13.8,
            bridge_width: 2.3,
            face_shape: 'oval',
            height: 170.5,
            weight: 70.2
          }
        }
      end

      it 'creates and retrieves eyewear measurements' do
        # Create measurement
        post '/api/v1/eyewear_measurements', 
             params: valid_params, 
             headers: headers
        
        expect(response).to have_http_status(:created)
        measurement_id = JSON.parse(response.body)['id']

        # Retrieve measurement
        get "/api/v1/eyewear_measurements/#{measurement_id}", 
            headers: headers
        
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body)).to include(
          'face_shape' => 'oval',
          'frame_recommendations' => be_present
        )
      end
    end

    context 'footwear measurements' do
      let(:valid_params) do
        {
          measurement: {
            foot_length: 26.5,
            foot_width: 9.8,
            arch_height: 3.2,
            arch_type: 'medium',
            height: 170.5,
            weight: 70.2
          }
        }
      end

      it 'handles the complete footwear measurement process' do
        # Create measurement
        post '/api/v1/footwear_measurements', 
             params: valid_params, 
             headers: headers
        
        expect(response).to have_http_status(:created)
        
        # Check recommendations
        get '/api/v1/footwear_measurements/recent', 
            headers: headers
        
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body)).to include('shoe_sizes', 'arch_support_recommendation')
      end
    end
  end

  describe 'Error handling' do
    it 'handles invalid measurements appropriately' do
      post '/api/v1/eyewear_measurements', 
           params: { measurement: { face_shape: 'invalid' } }, 
           headers: headers
      
      expect(response).to have_http_status(:unprocessable_entity)
      expect(JSON.parse(response.body)).to include('errors')
    end
  end
end