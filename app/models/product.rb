class Product < ActiveRecord::Base
  belongs_to :category

  # Validations
 validates_presence_of :category
 validates_presence_of :title
 validates_presence_of :description
 validates_presence_of :price
 validates_presence_of :image_file_name
end
