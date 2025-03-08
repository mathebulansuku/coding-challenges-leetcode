let output = [];

function fizzBuzz() {
  for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    }
  }
  console.log(output);
}

fizzBuzz();
