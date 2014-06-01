class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :title
      t.integer :parent_id
      t.integer :category_group_id
      t.boolean :is_active

      t.timestamps
    end
  end
end
