Rails.application.routes.draw do
  
  scope '/api' do 
    post 'user_token' => 'user_token#create'
    resources :users
    resources :articles
    resources :comments
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end