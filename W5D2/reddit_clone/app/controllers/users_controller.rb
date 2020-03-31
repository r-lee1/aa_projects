class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    redirect_to users_url if current_user.id.to_s != params[:id]
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  def destroy
    redirect_to users_url if current_user.id.to_s != params[:id]
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_url
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
