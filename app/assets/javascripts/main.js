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
  $("#addButton").on('click', function(event) {
    $.ajax({
      url: "/setlist//songs",
      method: "POST",
      data: {
      title: $("#textInput").val()}
    });
  });

});
