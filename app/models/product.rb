class Product < ActiveRecord::Base
  belongs_to :category

  # Validations
 validates_presence_of :category
 validates_presence_of :title
 validates_presence_of :description
 validates_presence_of :price
 validates_presence_of :image_file_name
 
 def as_json(options={})
    {
        :id => self.id.to_s,
        :title => self.title,
        :description => self.description,
        :price => self.price,
        :is_available => self.is_available,
        :is_active => self.is_active,
        :image_file_name => self.image_file_name,
        :categoryId => self.category_id
    }
  end
end
