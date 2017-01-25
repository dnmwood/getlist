class AddMinutesAndSeconds < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :minutes, :integer
  end
  def change
    add_column :songs, :seconds, :integer
  end
end
