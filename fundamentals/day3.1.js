const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

// 1 gallon = 25 miles
console.log(zeroFuel(50, 25, 2)); // true
console.log(zeroFuel(100, 50, 1)); // false
