//variables


var stones = {
green:
	{
		name: "Green", 
		value: 0
	},
blue:
	{
		name: "Blue", 
		value: 0
	},
red:
	{
		name: "Red", 
		value: 0
	},
yellow:
	{
		name: "Yellow", 
		value: 0
	}

};


//scoreboard
var gameScore = 0;
var targetScore = 0;
var winsScore = 0;
var lossesScore = 0;

//functions

//randomizer funcion
var randomizer = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//game starting function

var startGame = function() {

//reset score funtion

gameScore = 0;

//set new target function

targetScore = randomizer(19, 120);


//set new score for each stone function
stones.green.value = randomizer(1, 12);
stones.blue.value = randomizer(1, 12);
stones.red.value = randomizer(1, 12);
stones.yellow.value = randomizer(1, 12);

//html Updater
$("#your-score").html(gameScore);
$("#target-score").html(targetScore);

// Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Blue: " + stones.blue.value + " | Green: " + stones.green.value + " | Red: " + stones.red.value +
    " | Yellow: " + stones.yellow.value);
  console.log("-----------------------------------");
};

//check win or lose and reset game
var checkWin = function(){

if (gameScore > targetScore) { 
alert("Sorry. You lost!");
console.log("You Lost");

lossesScore++;

$("#loss-count").html(lossesScore);

startGame();

}

else if (gameScore === targetScore) {
	alert("You Win!");
	console.log("You Win");

	winsScore++;

	$("#win-count").html(winsScore);

	startGame();
	}
};

//Responding to crystal clicks
var addValues = function(clickedStones) {



//score changer

gameScore += clickedStones.value;
//html changer
$("#your-score").html(gameScore);
//checking for win function
checkWin();
//testing console
console.log("Your Score: " + gameScore);
//game starting
};
startGame();

$("#blue").click(function() {
	addValues(stones.blue);
});

$("#green").click(function() {
	addValues(stones.green);
});

$("#red").click(function()	{
	addValues(stones.red);
});

$("#yellow").click(function()	{
	addValues(stones.yellow);
});

