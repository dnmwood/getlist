$(document).ready(function () {
});

$(document).ready(function($) {
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

// $(function() {
//   $('#addButton').on('click', function(e) {
//     e.preventDefault();
//     var textInputVal = document.getElementById('textInput').value;
//     // var s = ( '#list' ).append( textInputVal );
//     $( '.list' ).append('<li>' + textInputVal + '</li>')
//     $('#textInput').val("");
//     // console.log($( '.list' ))
//     // $('textInputVal').appendTo('list')
//   });
// });
