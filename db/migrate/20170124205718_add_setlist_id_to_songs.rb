class AddSetlistIdToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :setlist_id, :integer
  end
end
