//calculate tip
function CalculateTip(){
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("servicesQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    //validate input
    if(billAmt === "" || serviceQual == 0){
        alert("Please Enter Value");
        return;
    }
    //check to see if this input is empty or less than or equal to 1
    if(numOfPeople === "" || numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";

    }else{
        document.getElementById("each").style.display = "block";
    }

    //calculate tip

    var total = (billAmt * serviceQual) / numOfPeople;
    total = Math.round(total);
    //display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

// hide the tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function 

document.getElementById("calculate").onclick = function(){
    CalculateTip();
};
    
