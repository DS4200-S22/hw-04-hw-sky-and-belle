/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

var counter = 0;
    function circle1Clicked() {
        
        counter += 1; 
        document.getElementById("clicks").innerHTML = counter; 
    }
    
    function circle3Clicked() {
        let curr_visibility = document.getElementById("c3").getAttribute("class"); 
    
        if (curr_visibility == "c3") {
            document.getElementById("c3").setAttribute("class", "hidden"); 
        } else {
            document.getElementById("c3").setAttribute("class", "c3"); 
        }
    }