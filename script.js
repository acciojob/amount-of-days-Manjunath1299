//your JS code here. If required.
function daysOfAYear(year) {
  if (isLeapYear(year)) {
    return 366; // Leap year has 366 days
  } else {
    return 365; // Non-leap year has 365 days
  }
}

function isLeapYear(year) {
  // Leap year if divisible by 4
  // but not divisible by 100 unless it is divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Examples
console.log(daysOfAYear(2022)); // Output: 365