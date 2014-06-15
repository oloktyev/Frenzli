class CategoriesController < ApplicationController
  def index
    @categories = Category.includes(:parent)

    render :json => @categories.to_json(
        :include => [
            { :category_group => {:only => :title} },
            :parent
        ],
        :except => [:category_group_id, :created_at, :updated_at])
  end

  def show

  end
end
