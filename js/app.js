//Variables
const form = document.getElementById('request-quote');



//Event Listeners
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {
        //Create the options for the Years
        const html = new HTMLUI() ;
        html.displayYears();
    
    }); 
    
    //When the form is submitted
    form.addEventListener('submit', function(e) {
        e.preventDefault();

         //Read the values from the form
    const make = document.getElementById('make').value;
    const year = document.getElementById('year').value;
    //Read the radio buttons
    const level = document.querySelector('input[name="level"]:checked').value;

    //Check that all the fields have something
    if( make === '' || year === '' || level === '') {
        console.log(error);

    } else {
        console.log('Allright!');
    }

    });
 
}


//Objects

function HTMLUI() {}

//Displays the latest years in the select
HTMLUI.prototype.displayYears = function() {
    //Max and Minimum Years
    const max = new Date().getFullYear(),
          min = max - 20;

    //Generate the list with the 20 years
    const selectYears = document.getElementById('year');

    //Print the values
    for(let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYears.appendChild(option);
        
    }
   
}
