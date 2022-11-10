
var Moon1 ="Moon 1";
var Moon2 ="Moon 2";


function rollThedice() {
    setTimeout(function () {
        var ranDomL = Math.floor(Math.random() * 6) + 1;
        var ranDomR = Math.floor(Math.random() * 6) + 1;

    if(document.querySelector(".win")){
        document.querySelector(".win").classList.remove("win");
        }
       

        document.querySelector(".phdiceL").setAttribute("src",
            "/img/dice" + ranDomL + ".png");

        document.querySelector(".phdiceR").setAttribute("src",
            "/img/dice" + ranDomR + ".png");

    if(ranDomL > ranDomR){
        document.querySelector("h1").innerHTML = ("Moon 1 " + " You go to Thee Moon 🚀")
        document.querySelector(".phdiceL").classList.add("win");
    }

    else if (ranDomL < ranDomR){
        document.querySelector("h1").innerHTML =("Moon 2 "  +  " You go to Thee Moon 🚀" )
        document.querySelector(".phdiceR").classList.add("win");
       }

    else {
        document.querySelector("h1").innerHTML = "Draw 💥"
    }
    });
}   
alert("Refresh me! I will go to the Moon ");