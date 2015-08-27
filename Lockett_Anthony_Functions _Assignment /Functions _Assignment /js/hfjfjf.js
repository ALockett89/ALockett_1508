/**
 * Created by TokyoGNSD1 on 8/26/15.
 */



var space = " "
var age = 21
var ageprompt = prompt("Please Enter Your Age!")

function agecheck() {
    while (ageprompt < age){
        alert("Sorry")
    }

}

agecheck()





//if(weeksBetweenPay === true) {
  //  var hoursworked = prompt("How many hours do you work in a week?")// This variable is a prompt that is asking for the number of hours the user has worked in a week.
    //while (hoursworked === "" || isNaN(hoursworked)) {
      //  if (hoursworked === "") {
        //    hoursworked = prompt("How many hours do you work in a week?\n**Please Do Not Leave Blank!**")// This variable is a prompt that is asking for the number of hours the user has worked in a week.
        //} else if (isNaN(hoursworked)) {
         //   hoursworked = prompt("How many hours do you work in a week?\n** Please Only Use Nnumbers!**")// This variable is a prompt that is asking for the number of hours the user has worked in a week.
        //}
    //}console.log("You've worked" + space + hoursworked + space + "hours in a week!")// This outputs the user's input to the console.
//} else {
  //  if (weeksBetweenPay === false) {
    //    var hoursworked2 = prompt("How many hours do you work in a week?")// This variable is a prompt that is asking for the number of hours the user has worked in a week.
      //  while (hoursworked2 === "" || isNaN(hoursworked2)) {
        //    if (hoursworked2 === "") {
          //      hoursworked2 = prompt("How many hours do you work in a week?\n**Please Do Not Leave Blank!**")// This variable is a prompt that is asking for the number of hours the user has worked in a week.
           // } else if (isNaN(hoursworked2)) {
            //    hoursworked2 = prompt("How many hours do you work in a week?\n** Please Only Use Nnumbers!**")// This variable is a prompt that is asking for the number of hours the user has worked in a week.
           // }
        //}var hoursworked3 = Number(hoursworked2)
        //console.log("You've worked" + space + hoursworked2 + space + "hours in a week!")// This outputs the user's input to the console.
    //}
//}


alert("Welcome!\nNow lets pick a lottery!")
console.log("User is over the age of" + space + age + "!")

var lottoprompt = prompt("Which lottery are you playing?\nFlorida Lottery\nor\nPowerball Lottery")
function lotto(whichlotto) {
    while (whichlotto != flolotto) {
        var whichlotto2 = prompt("**Enter A Correct Answer*\n**Case Sensitive**\nWhich lottery are you playing?\nFlorida Lottery\nor\nPowerball Lottery")
        timesskipped++
        if (timesskipped === 4) {
            alert("Just come back when you are ready! =]")
            console.log("User did not enter a correct response in the allowed amount of attempts")
            break

        }else{
            alert("Awesome! Lets play the" + space + flolotto + "!")
            console.log("User choose" + space + flolotto + "!")

        }


    }



}lotto(lottoprompt)

}