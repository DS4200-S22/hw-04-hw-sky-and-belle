/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

// EVENT LISTENERS
document.getElementById("c1").addEventListener("click", circle1Clicked);
document.getElementById("c2").addEventListener("mouseover", circle2MouseOver);
document.getElementById("c2").addEventListener("mouseout", circle2MouseOut);
document.getElementById("c3").addEventListener("click", circle3Clicked);


// WHEN YOU CLICK CIRCLE 1, INCREASE COUNTER
var counter = 0;

function circle1Clicked() {
    counter += 1; 
    document.getElementById("clicks").innerHTML = counter; 
}

// WHEN YOU MOUSEOVER CIRCLE 2, SHOW BORDER

function circle2MouseOver() {
    document.getElementById("c2").setAttribute("class", "stroke");
}

function circle2MouseOut() {
    document.getElementById("c2").setAttribute("class", "");
}



// WHEN YOU CLICK CIRCLE 3, TOGGLE VISIBILITY
var counter3 = 0;
var visibility = ["hidden", "stroke"];

function circle3Clicked() {
    document.getElementById("c3").setAttribute("class", visibility[counter3 % 2]); 
    counter3++;
}


