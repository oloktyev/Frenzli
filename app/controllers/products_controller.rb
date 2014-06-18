class ProductsController < ApplicationController
  # before_filter :authenticate_user!

  def index
    @products = Product.all
    respond_to do |format|
      format.html { render :json => @products}
      format.json { render :json => @products}
    end
  end
end
