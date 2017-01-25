$(document).ready(function () {
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

$(document).ready(function($) {
  $("#new_song").on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr("action"),
      method: "POST",
      data: $('#song_title, #song_duration').serialize(),
    }).done(function () {
      var textInputTitle = document.getElementById('song_title').value;
        $(textInputTitle).appendTo('.list')
        $('#song_title').val("");
      var textInputDur = document.getElementById('song_duration').value;
        $(textInputDur).appendTo('.number_list')
        $('#song_duration').val("");
    });
  });
});
