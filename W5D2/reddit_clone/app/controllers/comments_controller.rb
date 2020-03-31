class CommentsController < ApplicationController

  before_action :require_sign_in

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.post_id = params[:post_id]
    @comment.save
    flash[:errors] = @comment.errors.full_messages
    if @comment.parent_comment_id == nil
      redirect_to post_url(@comment.post)
    else
      redirect_to post_comment_url(post_id: @comment.post, id: @comment.parent_comment_id)
    end
  end

  def show
    @comment = Comment.find(params[:id])
    @post = Post.find(params[:post_id])
  end

  def destroy

  end

  private

  def comment_params
    params.require(:comment).permit(:content, :parent_comment_id)
  end

end
