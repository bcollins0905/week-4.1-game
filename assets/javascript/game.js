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
console.log(stones);


//scoreboard

var targetScore = 0
var gameScore = 0
var winsScore = 0
var lossesScore = 0

//functions

//randomizer funcion
function randomizer(min, max) {
  return Math.random() * (max - min + 1) + min;
}

//game starting function

var startGame = function(){

//reset score funtion

gameScore = 0;

//set new target function

targetScore = randomizer(19,120)

console.log(gameScore)
console.log(targetScore)

//set new score for each stone function
stones.green.value = randomizer(1,12)
stones.blue.value = randomizer(1,12)
stones.red.value = randomizer(1,12)
stones.yellow.value = randomizer(1,12)

console.log(stones.green.value)
//html updater

//testing console

//checkwin or lose and reset game

//Responding to crystal clicks

//score changer
}
//html changer

//checking for win function

//testing console

//game starting