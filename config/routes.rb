Rails.application.routes.draw do
  scope :api do
    devise_for :users,
      path: 'auth',
      defaults: { format: :json },
      controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
      }
  end

  namespace :api do
    namespace :v1 do
      resources :user_measurements do
        collection do
          get :recent
        end
      end
      
      resources :measurements do
        collection do
          get :recent
          get :stats
        end
      end
      
      resources :eyewear_measurements
      resources :footwear_measurements
      resources :accessory_measurements
      resources :clothing_items do
        member do
          get 'recommend_size'
        end
      end
      resources :body_scans, only: [:create]
    end
  end
end