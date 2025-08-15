function bmi(weight, height, bmiCalc = weight / height ** 2) {
  return bmiCalc <= 18.5
    ? "Underweight"
    : bmiCalc <= 25.0
    ? "Normal"
    : bmiCalc <= 30.0
    ? "Overweight"
    : bmiCalc > 30
    ? "Obese"
    : "";
}

console.log(bmi(50, 1.8)); // Under
console.log(bmi(80, 1.8)); // Normal
console.log(bmi(90, 1.8)); // Over
console.log(bmi(100, 1.8)); // Obese
