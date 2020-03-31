class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user

  # def current_user
  #   user = User.find_by(session_token: session[:session_token])
  #   return nil unless user
  #   user
  # end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
    # @current_user ||= User.find_by(username: 'bob')
  end

end
