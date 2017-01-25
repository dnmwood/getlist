class SongsController < ApplicationController
  before_action :set_setlist

  def create
    @song = @setlist.songs.create(song_params)

    if @song.save
      redirect_to @setlist
    else
      redirect_to @setlist, alert: "Could not add song."
    end
  end

  def update
    @setlist = Setlist.find(params[:id])

    if @setlist.update_attributes(setlist_params)
      redirect_to setlist_url(@setlist)
    else
      render :edit
    end
  end


  def new
    @song = Song.new
  end

  private

  def set_setlist
    @setlist = Setlist.find(params[:setlist_id])
  end

  def song_params
    params[:song].permit(:title, :minutes, :seconds)
  end

end
