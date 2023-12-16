/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var cost_per_day=0;
var HalfFull = "Full";



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
var mon=document.getElementById("monday");
var tue=document.getElementById("tuesday");
var wed=document.getElementById("wednesday");
var thur=document.getElementById("thursday");
var fri=document.getElementById("friday");

var clear=document.getElementById("clear-button");
function add_days(rate){
    var count =0;
    var button =document.getElementById("day")
    if(this.classList.contains("day")){
        this.classList.add('clicked'); 
    }
    button.addEventListener("click", function() {
        count++;
        return count;
    });
    recalculate(count,rate);
}
mon.addEventListener('click',add_days);
tue.addEventListener('click',add_days);
wed.addEventListener('click',add_days);
thur.addEventListener('click',add_days);
fri.addEventListener('click',add_days);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function clear_days(){
    mon.classList.remove('clicked');
    tue.classList.remove('clicked');
    wed.classList.remove('clicked');
    thur.classList.remove('clicked');
    fri.classList.remove('clicked');
}

clear.addEventListener('click',clear_days);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var full=document.getElementById("full");
var half=document.getElementById("half");
function Rates(){;
    var rate =0;
    if(half.classList.contains('clicked')){
        full.classList.add('clicked');
        half.classList.remove('clicked');
        rate =35;
        recalculate(count,rate);
        return rate
    }
    else{
        half.classList.add('clicked');
        full.classList.remove('clicked');
        rate =20;
        recalculate(count,rate);
        return rate
    }
}
half.addEventListener('click',Rates);
full.addEventListener('click',Rates);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(count, rate){
    let total = document.getElementById("calculated-cost");
        if(full.classList.contains("clicked")){
            total.innerHTML=rate*count;
        }
        else{
            half.classList.contains("clicked")
            total.innerHTML= rate*count;
        }
}
