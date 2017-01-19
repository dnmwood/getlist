document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('song').value;
  if (value) addSong(value);
});
