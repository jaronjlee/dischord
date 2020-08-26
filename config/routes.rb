Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :servers, only: [:index, :show, :create, :update, :destroy, :join, :leave] do
      resources :channels, only: [:index, :show, :create, :update, :destroy]
    end
    resources :memberships, only: [:create, :destroy]
  end

  post 'api/servers/join/:invite_code', to: 'api/servers#join'
  delete 'api/servers/leave/:id', to: 'api/servers#leave'
  root "static_pages#root"
end
