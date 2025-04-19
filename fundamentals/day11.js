function setAlarm(employed, vacation) {
  return employed && !vacation ? true : false;
}

console.log(setAlarm(true, true)); // false
console.log(setAlarm(false, true)); // false
console.log(setAlarm(true, false)); // true
