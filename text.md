# BMI CALCULATOR

## HTML Code
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
</head>
<body style="background-color: gray;">
    <div class="container">
        <h1>BMI Calculator</h1>

        <form>
            <p><label>Height in CM:</label><input type="text" id="height"></p>
            <p><label>Weight in KG:</label><input type="text" id="weight"></p>
            <button style="border: 2px solid #212121; padding: 5px; border-radius: 3px;">Calculate</button>
        </form>
        <div id="result" style="color: #fff;"></div>
        <div id="resultCompare" style="color: #fff;"></div>
        <div id="weight-guide">
            <h3>BMI Weight guide</h3>
            <p>Under Weight = Less than 18.6</p>
            <p>Normal Range = 18.6 and 24.9</p>
            <p>Overweight = Greater than 24.9</p>
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```

## Javascipt Code
``` js
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
```