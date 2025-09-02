function validatePIN(pin) {
  return pin.length == 4 || pin.length == 6 ? /^\d+$/.test(pin) : false;
}

//Only regex
//return /^(\d{4}|\d{6})$/.test(pin)

console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("a234")); // false
