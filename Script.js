function RollDice() {
    var dieRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("output").innerHTML = dieRoll;
}