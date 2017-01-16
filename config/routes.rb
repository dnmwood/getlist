Rails.application.routes.draw do
  resources :setlists
  get 'setlist/index'
  root 'setlist#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
