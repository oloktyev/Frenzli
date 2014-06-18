class Category < ActiveRecord::Base
  has_many :products
  has_many :child_categories, :class_name => "Category", :foreign_key => "parent_id"
  belongs_to :category_group
  belongs_to :parent, :class_name => "Category",
             :foreign_key => "parent_id"

  # Validations
  validates_presence_of :title

  def as_json(options={})
    {
        :id => self.id,
        :name => self.title,
        :hasChildren => self.child_categories.length > 0,
        :parentId => self.parent_id
    }
  end
end
