/*
 Anthony Lockett
 SDI Week 4
 Functions Assignment
 8/24/15
 */


alert("          Here is my Week 4 submission! \n               Functions Assignment");// Just a friendly alert that I added.

var space = " "
var age = 21
var ageprompt = prompt("Please Enter Your Age!")
var flolotto = "Florida Lottery"
var powlotto = "Powerball Lottery"
var timesskipped = 1

function agecheck() {
    if (ageprompt < age) {
        alert("Sorry, come back when you are older")
        console.log("User is under the age of" + space + age + "!")
    } else {
        alert("Welcome!\nNow lets pick a lottery!")
        console.log("User is over the age of" + space + age + "!")
    }
}


function whichlotto(){
    var flolotto2 = 1
    var powlotto2 = 2
    var whichlotto2 = prompt("Which lottery are you playing?\nEnter '1' for Florida Lottery.\nEnter '2' for Powerball Lottery")
    if (whichlotto2 = 1){
        alert("Ok, so" + space + flolotto + space + "it is then!")
        console.log("User picked" + flolotto2 + "!")
    }else{
        alert("Ok, so" + space + powlotto + space + "it is then!")
        console.log("User picked" + powlotto2 + "!")
    }

}

function lottopick(){
    if (agecheck() === false){
        whichlotto()

    }
}

agecheck()
lottopick()










