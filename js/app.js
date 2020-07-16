document.querySelector("#generate-name").addEventListener('submit', chargeNames);

//call to ajax and print the results 

function chargeNames(e) {
    e.preventDefault();


    //reading
    const origin = document.getElementById('origin'); 
    const originSelected = origin.options[origin.selectedIndex].value;

    console.log(originSelected);


    const gender = document.getElementById('gender'); 
    const genderSelected = gender.options[gender.selectedIndex].value;

    console.log(genderSelected);

    const number = document.getElementById('number').value; 
  


    console.log(number);

    let url=''
    url += 'https://uinames.com/api/?';
}