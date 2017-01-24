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
      data: $(this).serialize()
    }).done(function () {
      var textInputVal = document.getElementById('song_title').value;
      $('.list').append('<li>' + textInputVal + '</li>')
      $('#song_title').val("");
    });
  });

});
