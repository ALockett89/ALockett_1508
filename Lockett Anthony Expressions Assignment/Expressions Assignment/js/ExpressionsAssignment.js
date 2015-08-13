/*
 Anthony Lockett
 SDI Week 2
 Expressions Assignment
 8/10/15
 */


alert("Here is my Week 2 submission! \n      Expressions Assignment");// Just a friendly alert that I added.
var space = " "
var weeks = [1,2]
var hoursworked = prompt("How many hours do you work in a week?")
console.log("You've worked" + space + hoursworked + space + "in a week!")
var numofweeks = prompt("How many weeks in between pay checks? \nEnter '1' for one week. \nEnter '2' for two weeks")
console.log("Weeks between your pay checks:" + space + numofweeks)
var A = numofweeks * weeks[0]
var B = numofweeks * weeks[1]
var hours1 = A * hoursworked
var hours2 = B * hoursworked

if(numofweeks <= weeks[1]){
    console.log("Hours you worked this pay period:" + space + hours1)
}else{
    console.log("Hours you worked this pay period:" + space + hours2)
}
var payrate = prompt("Next, what is your hourly pay rate? \n *Please only use numbers*")
console.log("Your wage is $" + payrate + space + "an hour!")
alert("Now lets calculate your next paycheck! =} \nComputing................................")
alert("................................Almost done \n................................")
if(numofweeks <= weeks[1]){
    var paycheck1 = payrate * hours1
    alert("Your gross income on your next paycheck will be $:" + paycheck1 + "!" + "\nDon't spend it all in one place!")
    console.log("Your gross income on your next paycheck will be $" + paycheck1)
}else{
    var paycheck2 = payrate * hours2
    alert("Your gross income on your next paycheck will be $:" + paycheck2 + "!" + "\nDon't spend it all in one place!")
    console.log("Your gross income on your next paycheck will be $:" + paycheck2)
}
