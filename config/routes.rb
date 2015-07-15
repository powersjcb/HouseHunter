Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :houses
  end
end
