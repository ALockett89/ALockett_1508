
function dateoftest(){
    var ageprompt = prompt("Please Enter Your Age!")
    while(ageprompt==="" || isNaN(ageprompt)){
        if(ageprompt===""){
            ageprompt= prompt("PLEASE DO NOT LEAVE BLANK!!!\n What is today's year?")
        }else if(isNaN(ageprompt)){
            ageprompt = prompt("ONLY USE NUMBERS!!!\n What is today's year?")
        }
    }return ageprompt
}
var findage = dateoftest()