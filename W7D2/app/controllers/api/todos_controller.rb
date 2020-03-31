class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id])
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def update
    @todo = Todo.find_by_id(params[:id])
    if @todo.update
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end

  def create
    @todo = Todo.new(todo_params)
    puts @todo
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = Todo.find_by_id(params[:id])
    @todo.destroy if @todo
    render json: Todo.all
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
