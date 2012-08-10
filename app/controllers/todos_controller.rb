class TodosController < ApplicationController
 respond_to :json

  def index
    @todos = if params[:q].present?
      Todo.search_by_name(params[:q])
    else
      Todo.all
    end
    respond_with @todos
  end

  def show
    respond_with Todo.find(params[:id])
  end

  def create
    respond_with Todo.create(params[:todo])
  end

  def update
    respond_with Todo.update(params[:id], params[:todo])
  end

  def destroy
    respond_with Todo.destroy(params[:id])
  end
end
