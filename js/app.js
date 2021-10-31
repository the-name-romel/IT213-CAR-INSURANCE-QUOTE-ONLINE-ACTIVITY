//Variables
const form = document.getElementById('request-quote');

const html = new HTMLUI();


//Event Listeners
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {
        //Create the options for the Years
       
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
    if( make === '' || year === '' || level === '' ) {
       html.displayError('All the fields are mandatory');

    } else {
       //Make the quotation
       const insurance = new Insurance(make, year, level);
       const  price = insurance.calculateQuotation(insurance);
    }

    });
 
}


//Objects

//Everything related to quotation and calculations
function Insurance(make, year, level){
    this.make = make;
    this.year = year;
    this.level = level;
}

//Calculate the price for the current quotation
Insurance.prototype.calculateQuotation = function() {
    console.log(insurance);
}

//Everything related to HTML
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

//Prints an error
HTMLUI.prototype.displayError = function (message) {
    //create a div
    const div = document.createElement('div');
    div.classList = 'error';

    //Insert the Message
    div.innerHTML = `
        <p>${message}</p>
    `;

    form.insertBefore(div, document.querySelector('.form-group'));

    //Remove the error
    setTimeout(function() {
        document.querySelector('.error').remove();
    }, 3000);
}
