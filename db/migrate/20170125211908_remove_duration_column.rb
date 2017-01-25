class RemoveDurationColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :duration
  end
end
