function getGrade(s1, s2, s3) {
  // Calculate the average of the three scores
  const average = (s1 + s2 + s3) / 3;

  // Determine the letter grade based on the average
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(70, 70, 100)); // "B"
console.log(getGrade(60, 82, 76)); // "C"
console.log(getGrade(49, 50, 50)); // "F"
