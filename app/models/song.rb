class Song < ApplicationRecord
  belongs_to :setlist

  validates :title, length: { minimum: 1, message: "CUSTOM ERROR MESSAGE" }
end
