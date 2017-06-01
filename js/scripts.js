$(document).ready(function() {
var animalSelect = parseInt($("#animal").val());

if (animalSelect === 1) {
    $('.whales').show();
  } else if (animalSelect  === 2) {
    $('.turtles').show();
  } else if (animalSelect === 3){
    $('.snakes').show();
  } else {
    //alert("Please select an animal");
  }

  //$(".whales").click(function() {
    //  $(".turtles").hide();
    //  $(".snakes").hide();
    //});
});
