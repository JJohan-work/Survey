

var yearNum = 2000;

$(document).ready(function() {


  $("#make").change(function() {
    $(".model").hide();
    var current = $('#make').val();
    console.log(current);
    $("#"+current).show();
  });

  $("#testbutton").click(function() {
    var myDdl = document.getElementById("year");
    myDdl.options.add(new Option(yearNum, "1"), myDdl.options[0]);
    yearNum += 1; 
  });

  $('input').submit(function() {

    event.preventDefault();
  });
});