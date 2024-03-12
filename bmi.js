document.getElementById('calculateBtn').addEventListener('click', function() {
  let height = parseFloat(document.getElementById('height').value);
  let weight = parseFloat(document.getElementById('weight').value);

  if (height > 3 && weight > 0) {
    let bmi = calculateBMI(weight, height);

    if (bmi < 18.5){
    document.getElementById('result').innerText = 'Your BMI is ' + bmi.toFixed(2) + " You are underweight";}
    else if (bmi >= 18.5 && bmi < 25){
    document.getElementById('result').innerText = 'Your BMI is ' + bmi.toFixed(2) + " You have a normal weight";}
    if (bmi >= 25 && bmi < 30){
    document.getElementById('result').innerText = 'Your BMI is ' + bmi.toFixed(2) + " You are overweight";}
    else if (bmi >= 30.0){
    document.getElementById('result').innerText = 'Your BMI is ' + bmi.toFixed(2) + " You are Obese";}
  } else {
    document.getElementById('result').innerText = 'Please enter valid height and weight!';
  }
});

function calculateBMI(weight, height) {
  return weight / (height * height);
}
