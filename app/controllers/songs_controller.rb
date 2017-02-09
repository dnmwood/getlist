class SongsController < ApplicationController
  before_action :set_setlist

  def index
    @songs = Song.all
  end

  def create
    @song = @setlist.songs.create(song_params)

    if @song.save
      redirect_to @setlist
    else
      redirect_to @setlist, alert: "Could not add song."
    end
  end

  def update
    @setlist = Setlist.song.find(params[:id])

    if @song.update_attributes(song_params)
      redirect_to setlist_url(@setlist)
    else
      render :edit
    end
  end

  def new
    @song = Song.new
  end

  def destroy
    @song = Song.find(params[:id])

    if @song.destroy
      flash[:notice] = "song destroyed."
      redirect_to @setlist
    else
      flash[:error] = "There was an error completing the item."
    end

    respond_to do |format|
      format.html
      format.js
    end

  end

  private

  def set_setlist
    @setlist = Setlist.find(params[:setlist_id])
  end

  def song_params
    params[:song].permit(:title, :minutes, :seconds)
  end

end
