var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
  userClickedPattern.push(userChosenColour);
});

function animatePress(currentColour) {
  $(".btn").addClass("pressed");
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}
