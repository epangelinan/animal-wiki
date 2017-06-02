$(document).ready(function() {
  $("#animal").change(function() {
    var animalSelect = parseInt($("#animal").val());
  //  alert(animalSelect);

    if (animalSelect === 1) {
        $('.whales').show();
        $('.turtles').hide();
        $('.snakes').hide();
      } else if (animalSelect  === 2) {
        $('.turtles').show();
        $('.whales').hide();
        $('.snakes').hide();
      } else if (animalSelect === 3){
        $('.snakes').show();
        $('.turtles').hide();
        $('.whales').hide();
      } else {
        alert("Please select an animal");
      }
  });
});
