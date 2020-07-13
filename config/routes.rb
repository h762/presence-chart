Rails.application.routes.draw do
  devise_for :users
  root 'schedules#index'
  resources :users, only: [:edit, :update]
end
