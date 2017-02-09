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

$(document).ready(function($) {
  $(".delete-song").on('click', function(event) {
    event.preventDefault();
    var theButton = $(this)
    $.ajax({
      url: window.location + '/songs/' +  $(this).attr('id'),
      method: "DELETE",
        data: $('#song_title, #song_minutes, #song_seconds').serialize(),
    }).done(function() {
      console.log(theButton, theButton.parent());
      theButton.closest("tr").remove();
    });
  });
});
//
// function allowDrop(ev) {
//     ev.preventDefault();
// }
//
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }
//
// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }
