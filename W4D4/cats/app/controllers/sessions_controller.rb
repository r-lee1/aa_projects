class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      # login!
      @user.reset_session_token!
      session[:session_token] = @user.session_token
      @user.save
      redirect_to cats_url
    else
      render plain: 'not a valid user'
    end

    # redirect_to 'https://www.google.com/'
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

end
