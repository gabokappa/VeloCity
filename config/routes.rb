Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'signup/index'
      get 'signup/create'
      get 'signup/show'
      post 'signup/login_check'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'components/index'
      get 'components/create'
      get 'components/show'
      post 'components/show/:bike_id', to: 'components#show'
      get 'components/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'bikes/index'
      get 'bikes/create'
      get 'bikes/show'
      post 'bikes/show/:id', to: 'bikes#show'
      # modified the route above to see if tested well.
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
