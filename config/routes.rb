Rails.application.routes.draw do

  get 'bike/api/v1/components/destroy', to: 'components#destroy'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: %i[show create update destroy]
      resources :tokens, only: [:create]
    end
  end
  # namespace :api do
  #   namespace :v1 do
  #     get 'tokens/create'
  #   end
  # end
  namespace :api do
    namespace :v1 do
      get 'strava/index'
      get 'strava/create'
      get 'strava/show'
      get 'strava/destroy'
      get 'strava/authorize'
      get 'strava/authorize/:user_id', to: 'strava#authorize'
      get 'strava/find_bikes'
      post 'strava/refresh_bikes'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'signup/index'
      post 'signup/create'
      get 'signup/show'
      post 'signup/login_check'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'components/index'
      post 'components/create', to: 'components#create'
      get 'components/show'
      post 'components/show/:bike_id', to: 'components#show'
      get 'components/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'bikes/index'
      get 'bikes/create'
      get 'bikes/show', to: 'bikes#show'
      get 'bikes/show/:id', to: 'bikes#destroy'
      # modified the route above to see if tested well.
      get 'bikes/destroy'
    end
  end
  # namespace :api do
  #   namespace :v1 do
  #     get 'users/index'
  #     post 'users/create'
  #     get '/show/:id', to: 'users#show'
  #     get '/users/:id', to: 'users#show'
  #     get 'users/update'
  #     delete '/destroy/:id', to: 'users#destroy'
  #   end
  # end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
