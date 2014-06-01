class Category < ActiveRecord::Base
  has_many :products
  belongs_to :category_group
  belongs_to :parent, :class_name => "Category",
             :foreign_key => "parent_id"

  # Validations
  validates_presence_of :title
end
