class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.decimal :price
      t.boolean :is_available
      t.boolean :is_active
      t.string :image_file_name

      t.timestamps
    end
  end
end
