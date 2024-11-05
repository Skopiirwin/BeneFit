# config/routes.rb
Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'
    }

    namespace :api do
      namespace :v1 do
        resources :user_measurements do
          collection do
            get :recent
          end
        end
        resources :clothing_items do
          member do
            get 'recommend_size'
          end
        end
        resources :body_scans, only: [:create]
      end
    end
  end

  get '/health', to: 'application#health'

  # Catch-all route for the Vue.js frontend
  get '*path', to: 'application#frontend_index_html', constraints: ->(request) {
    !request.xhr? && request.format.html?
  }
end