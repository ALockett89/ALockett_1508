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
    while(hoursworked === "" || isNaN(hoursworked)) {
        if(hoursworked === ""){
            hoursworked = prompt("How many hours do you work in a week?\n**Please Do Not Leave Blank!**")
        }else if(isNaN(hoursworked)){
            hoursworked = prompt("How many hours do you work in a week?\n** Please Only Use Nnumbers!**")
        }else{
        }
    }console.log("You've worked" + space + hoursworked + space + "hours in a week!")

}
var taxes = true
taxes = confirm("Do you pay taxes in Louisiana? \nPress OK for Yes \nPress CANCEL for No")
console.log("Do you pay taxes in Louisiana:" + space + taxes);

