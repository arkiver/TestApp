class TasksController < ApplicationController
  before_action :set_task, :except => [:create_task, :index]
  skip_before_filter :verify_authenticity_token

  def index
    @tasks = Task.all
  end

  def new
  end

  def create
  end

  def update
  end

  def destroy
  end

  def fetch_task
    respond_to do |format|
      format.json {
        render json: @task
      }
      format.html{
        render :fetch_task
      }
    end
  end

  def create_task
    title = task_params[:title]
    description = task_params[:description]
    task = Task.create!(:title => title, :description => description)
    respond_to do |format|
      format.json {
        render json: task
      }
    end
  end

  def update_task
    task = Task.find(params[:id])
    task.title = task_params[:title]
    task.description = task_params[:description]
    if task.save
      respond_to do |format|
        format.json {
          render json: task
        }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_params
      params[:task].permit(:title, :description)
    rescue
      params.permit(:title, :description)
    end
end
