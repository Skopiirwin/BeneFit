class CreateClothingItems < ActiveRecord::Migration[7.2]
  def change
    create_table :clothing_items do |t|
      t.string :name
      t.string :category
      t.json :size_chart

      t.timestamps
    end
  end
end
