function PrimeTime(num) {
  //Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
  if (num < 2) {
    return "false";
  }

  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return "false";
    }
  }

  return "true";
}

// keep this function call here
console.log(PrimeTime(readline()));
