
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button1").addEventListener("click", function(){
        calculate()
    });
});

function calculate(){

    const full_charge = parseInt(document.getElementById("full_c").value);
    const design_cap = parseInt(document.getElementById("design_c").value);
    
    result = full_charge / design_cap * 100
    
    if (result < 70) {
          document.getElementById("bod").style.background = "#f40953";
          document.getElementById("result").innerHTML = "Battery is at "+ result.toFixed() +"%"+", Change it!"
    }else if (result >= 70) {
        document.getElementById("bod").style.background = "#39c4c3";
        document.getElementById("result").innerHTML = "Battery is at "+ result.toFixed() +"%"+", its good!"
    }
    
}  
