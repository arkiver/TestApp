TestApp::Application.routes.draw do
  get '/fetch_task' => "tasks#fetch_task"
  put '/update_task' => "tasks#update_task"
  post '/create_task' => "tasks#create_task"
end
