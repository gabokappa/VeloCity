Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'strava/index'
      get 'strava/create'
      get 'strava/show'
      get 'strava/destroy'
      get 'strava/authorize'
      get 'strava/find_bikes'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'components/index'
      get 'components/create'
      get 'components/show'
      get 'components/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'bikes/index'
      get 'bikes/create'
      get 'bikes/show'
      get 'bikes/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      get '/show/:id', to: 'users#show'
      delete '/destroy/:id', to: 'users#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
