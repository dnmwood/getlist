class SongsController < ApplicationController
  before_action :set_setlist

  def create
    @song = @setlist.songs.create(song_params)
    redirect_to @setlist
  end

  private

  def set_setlist
    @setlist = Setlist.find(params[:song_id])
  end

  def song_params
    params[:song].permit(:title)
  end

end
