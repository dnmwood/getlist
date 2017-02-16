$(document).ready(function($) {

  //Your "POST" ajax request for setlist songs
  $("#new_song").on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr("action"),
      method: "POST",
      data: $('#song_title, #song_minutes, #song_seconds').serialize(),
    }).done(function () {
      var textInputTitle = document.getElementById('song_title').value;
        $(textInputTitle).appendTo('.list')
          $('#song_title').val("");
      var textInputMin = document.getElementById('song_minutes').value;
        $(textInputMin).appendTo('.number_list')
          $('#song_minutes').val("");
      var textInputSec = document.getElementById('song_seconds').value;
        $(textInputSec).appendTo('.number_list')
          $('#song_seconds').val("");
    });
  });
});

//loading turbolinks in order to have the page recognize new event listeners
$(document).on('turbolinks:load', function() {
  $( ".song-table" ).on('click', 'button', function() {

    var theButton = $(this)
    var row = theButton.closest('tr')

    $.ajax({
      url: window.location + '/songs/' + $(this).attr('id'),
      method: "DELETE",
        data: $('#song_title, #song_minutes, #song_seconds').serialize(),
    }).done(function() {
      row.remove();
    });
  });
});

$( ".fa" ).hover(function () {
   $( ".fa" ).toggleClass("on_hover");
});
