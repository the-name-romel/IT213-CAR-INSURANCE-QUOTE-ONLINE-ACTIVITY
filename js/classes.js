//Classes

//Everything related to quotation and calculations
class Insurance{
    constructor(make, year, level) {
        this.make = make;
        this.year = year;
        this.level = level;
    }

    //Calculate the price for the current quotation
    calculateQuotation(insurance) {
    let price;
    const base = 2000;

    //Get the make
    const make = insurance.make;

    /*
     1 = American 15%
     2 = Asian 05%
     3 = European 35%

     */
    switch (make) {
        case '1':
            price = base * 1.15;
            break;
        case '2':
            price = base * 1.05;
            break;
        case '3':
            price = base * 1.35;
            break;
    }

    //Get the year
    const year = insurance.year;
    //Get the years difference
    const difference = this.getYearDifference(year);

    //Each year the cost of the insurance is going to be 3% cheaper
    price = price - ((difference * 3) * price) / 100;
    
    //Check the level of protection
    const level = insurance.level;

    price = this.calculateLevel(price,level);
    
    return price;

}
//Returns the different between years
getYearDifference(year) {
    return new Date().getFullYear() - year;
}


//Adds the value based on the level of protection
calculateLevel(price, level) {
/*
    Basic Insurance is going to increase the value by 30%
    Complete Insurance is going to increase the value by 50%  
*/
if(level === 'basic') {
   price = price * 1.30;
} else {
   price = price * 1.50;
}

return price;
}
}

//Everything related to HTML
class HTMLUI{

//Displays the latest years in the select
    displayYears() {
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
    displayError(message) {
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

//Prints the result into the HTML
    showResults(price, insurance) {
        //Print the result
        const result = document.getElementById('result');

        //Create a div with the result
        const div = document.createElement('div');

        //Get make from the object and assign a readable name
        let make = insurance.make;

        switch(make) {
            case '1':
                make = 'American';
                break;
            case '2':
                make = 'Asian';
                break;
            case '3':
                make = 'European';
                break;          
        }

        //Insert the result
        div.innerHTML = `
            <p class="header">Summary</p>
            <p>Make: ${make}</p>
            <p>Year: ${insurance.year}</p>
            <p>Level: ${insurance.level}</p>
            <p class="total">Total: $ ${price}</p>
        `;

        const spinner = document.querySelector('#loading img');
        spinner.style.display = 'block';

        setTimeout(function() {
            spinner.style.display = 'none';
            //Insert this in the HTML
                result.appendChild(div);
        }, 3000);

        
    }
}



