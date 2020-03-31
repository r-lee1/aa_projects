class UsersController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to new_session_url
    else
      redirect_to new_user_url
    end
  end

  # def self.validate_user(username, password)
  #   user = User.find_by(username: username)
  #   return nil unless user
  #   user.correct_password?(password) ? user :
  # end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
