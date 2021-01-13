



$(document).ready(function() {
  $("#make").change(function() {
    $(".model").hide();
    var current = $('#make').val();
    console.log(current);
    $("#"+current).show();
  });

  $('input').submit(function() {
    event.preventDefault();
  });
});