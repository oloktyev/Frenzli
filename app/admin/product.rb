ActiveAdmin.register Product do
  permit_params :title, :picture
  controller do
    def permitted_params
      params.permit!
    end
  end

  index do
    selectable_column
    id_column
    column :title
    column :description
    column :price
    column("Image") {|product| image_tag("products/" + product.image_file_name, :style => 'max-height: 100px') }
    column :is_active
    column :is_available
    actions
  end
  
  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #  permitted = [:permitted, :attributes]
  #  permitted << :other if resource.something?
  #  permitted
  # end
  
end
