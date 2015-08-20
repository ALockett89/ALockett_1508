/*
 Anthony Lockett
 SDI Week 3
 Expressions Assignment
 8/17/15
 */


alert("          Here is my Week 3 submission! \n               Conditionals Assignment");// Just a friendly alert that I added.
var space = " "
var weeks = [1,2]
var weeksBetweenPay = true
weeksBetweenPay = confirm("Do you get paid every week? \nPress OK for Yes \nPress CANCEL for No")
console.log("Do you get paid every week:" + space + weeksBetweenPay)
if(weeksBetweenPay === true) {
    var hoursworked = prompt("How many hours do you work in a week?")
    while (hoursworked === "" || isNaN(hoursworked)) {
        if (hoursworked === "") {
            hoursworked = prompt("How many hours do you work in a week?\n**Please Do Not Leave Blank!**")
        } else if (isNaN(hoursworked)) {
            hoursworked = prompt("How many hours do you work in a week?\n** Please Only Use Nnumbers!**")
        }
        console.log("You've worked" + space + hoursworked + space + "hours in a week!")
    }
    var dollarsbyhours = prompt("How much do you make an hour?")
    while (dollarsbyhours === "" || isNaN(dollarsbyhours)) {
        if (dollarsbyhours === "") {
            dollarsbyhours = prompt("How much do you make an hour?\n**Please Do Not Leave Blank!**")
        } else if (isNaN(dollarsbyhours)) {
            dollarsbyhours = prompt("How much do you make an hour?\n** Please Only Use Nnumbers!**")
        }
        console.log("You've worked" + space + hoursworked + space + "hours in a week!")
        var gross = weeks[1] * hoursworked
        console.log("Your gross income is $" + gross + "!")

    }
}else{

}
var taxes = true
taxes = confirm("Do you pay taxes in Louisiana? \nPress OK for Yes \nPress CANCEL for No")
console.log("You've worked" + space + hoursworked + space + "hours in a week!")
console.log("Your gross income is $" + gross + "!")
console.log("You've worked" + space + hoursworked + space + "hours in a week!")
console.log("Do you pay taxes in Louisiana:" + space + taxes);

