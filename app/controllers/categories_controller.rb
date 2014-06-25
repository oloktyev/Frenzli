class CategoriesController < ApplicationController
  def index
    @categories = Category.includes(:parent)
    render :json => @categories, root: "categories"
 
    # render :json => @categories.to_json(
    #     :include => [
    #         { :category_group => {:only => :title} },
    #         :parent,
    #         :child_categories => {:only => :id}
    #     ],
    #     :except => [:category_group_id, :created_at, :updated_at, :is_active])

  end

  def show

  end
end
