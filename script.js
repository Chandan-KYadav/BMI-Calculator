const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = Number.parseInt(document.querySelector('#height').value);
    const weight = Number.parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const resultCompare = document.querySelector('#resultCompare');

    if(height === " " || height < 0 || isNaN(height)){
        result.innerHTML = `Please give valid height`
    }
    else if(weight === " " || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give valid weight`
    }
    else{
        const bmi =(weight / ((height*height)/10000)).toFixed(2);

        // show the result
        result.innerHTML = `<h1>${bmi}</h1>`
        if(bmi < 18.6){
            resultCompare.innerHTML = `<h2>* Under Weight</h2>`
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            resultCompare.innerHTML = `<h2>* Normal Range</h2>`
        }
        if(bmi > 24.9){
            resultCompare.innerHTML = `<h2>* Over Weight</h2>`
        }
    }

})