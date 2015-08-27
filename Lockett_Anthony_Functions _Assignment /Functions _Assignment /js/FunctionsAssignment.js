/*
 Anthony Lockett
 SDI Week 4
 Functions Assignment
 8/24/15
 */


alert("          Here is my Week 4 submission! \n               Functions Assignment");// Just a friendly alert that I added.

var lottoprompt = prompt("Which lottery are you playing?\nFlorida Lottery\nor\nPowerball Lottery")
var flolotto = "Florida Lottery"
var powlotto = "Powerball Lottery"
var space = " "
var timesskipped = 1

function lotto(whichlotto) {
    while (whichlotto === "" || !flolotto) {
        whichlotto = prompt("**Please Do Not Leave Blank!**\nWhich lottery are you playing?\nFlorida Lottery\nor\nPowerball Lottery")
        timesskipped++
        if (timesskipped === 4) {
            alert("Bruh!!!")
            break
        }
        else if (!flolotto) {
            while (!flolotto) {
                whichlotto = prompt("**Please Enter One of The Following Selections!**\nWhich lottery are you playing?\nFlorida Lottery\nor\nPowerball Lottery")
                timesskipped++
                if (timesskipped === 4) {
                    alert("Bruh!!!")
                    break

                }


                console.log(whichlotto)


            }
            lotto(lottoprompt)
        }
    }
}
