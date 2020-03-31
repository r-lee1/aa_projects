class UsersController < ApplicationController
  
  def index
    render json: User.all
  end
  
  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def show
    user = User.find_by(id: params[:id])
    render json: user
  end
  
  def update
    # user = User.find_by(id: params[:id])
    user = User.update(params[:id], user_params)
    render json: user
  end
  
  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      redirect_to users_url
    else
      render plain: "This user doesn't exist in the database"
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:name, :email)
  end
  
end
