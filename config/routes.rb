TestApp::Application.routes.draw do
  resources :tasks
  get '/tasks' => 'tasks#index'
  get '/fetch_task' => "tasks#fetch_task"
  put '/update_task' => "tasks#update_task"
  delete '/delete_task' => "tasks#delete_task"
  post '/create_task' => "tasks#create_task"
  root to: "tasks#index"
end
