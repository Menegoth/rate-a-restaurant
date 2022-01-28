//span tags
const cashierSpan = document.getElementById("cashier-score");
const overallSpan = document.getElementById("overall-score");

//cashier scores
let cashierAverage = 0;
let cashierScore = 0;
let cashierAmount = 0;

const cashierButtons = document.querySelectorAll(".cashier-button");
for (let i = 0; i < cashierButtons.length; i++) {
    cashierButtons[i].addEventListener("click", function(e){
        cashierScore += parseInt(cashierButtons[i].textContent);
        cashierAmount += 1;
        cashierAverage = cashierScore / cashierAmount;
        cashierSpan.textContent = cashierAverage;
    })
}

//overall scores
let overallAverage = 0;
let overallScore = 0;
let overallAmount = 0;

const overallButtons = document.querySelectorAll(".overall-button");
for (let i = 0; i < overallButtons.length; i++) {
    overallButtons[i].addEventListener("click", function(){
        overallScore += parseInt(overallButtons[i].textContent);
        overallAmount += 1;
        overallAverage = overallScore / overallAmount;
        overallSpan.textContent = overallAverage;
    })
}

//scores button and div
let scoresShown = false;
const showButton = document.getElementById("show-hide");
const scoresDiv = document.getElementById("show-scores");

//button function
showButton.addEventListener("click", function(e){
    if (!scoresShown) {
        scoresDiv.style.display = "block";
        showButton.textContent = "Hide Ratings";
        scoresShown = !scoresShown;
    } else {
        scoresDiv.style.display = "none";
        showButton.textContent = "Show Ratings";
        scoresShown = !scoresShown;
    }
})