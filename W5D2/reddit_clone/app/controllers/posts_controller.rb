class PostsController < ApplicationController
  before_action :require_sign_in

  def new
    @post = Post.new
    @subs = Sub.all
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      params[:post][:sub_ids].each do |id|
        PostSub.create(post_id: @post.id, sub_id: id)
      end
      redirect_to post_url(@post)
    else
      @subs = Sub.all
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def show

    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
    @subs = Sub.all
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update_attributes(post_params)
      @post_subs = PostSub.select("*").where(post_id: params[:id])
      @post_subs.each do |post_sub|
        post_sub.destroy
      end

      params[:post][:sub_ids].each do |id|
        PostSub.create(post_id: @post.id, sub_id: id)
      end
      redirect_to post_url(@post)
    else
      @subs = Sub.all
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to sub_url(@post.sub)
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_id:[])
  end
end
