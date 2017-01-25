class AddMinutes < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :minutes, :integer
  end
end
