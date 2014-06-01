class CategoryGroup < ActiveRecord::Base
  has_many :categories

  # Validations
  validates_presence_of :title

end
