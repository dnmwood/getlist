class Setlist < ApplicationRecord
  has_many :songs

  def total_duration
    all_durations = []
    self.songs.each do |x|
      duration = x.minutes * 60 + x.seconds
      all_durations << duration
    end
      return all_durations.inject(0){|sum,x| sum + x }
  end

  def set_minutes
    self.total_duration / 60
  end

  def set_seconds
    if self.total_duration % 60 > 9
      return self.total_duration % 60
    else
      return "0#{self.total_duration % 60}"
    end
  end
end
