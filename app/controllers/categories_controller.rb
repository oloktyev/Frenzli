class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    respond_to do |format|
      format.html { render :json => @categories}
      format.json { render :json => @categories}
    end
  end

  def show
  end
end
