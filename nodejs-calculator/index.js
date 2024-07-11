const crypto = require('crypto');

// Get commands using process.argv
const args = process.argv.slice(2);
if (args.length < 1) {
  console.log("Please provide an operation and required arguments.");
  process.exit(1);
}

const operation = args[0];

// Function to perform the operations
const calculate = (operation, args) => {
  switch (operation) {
    case 'add':
      if (args.length < 3) {
        console.log("Addition requires at least two numbers.");
        return;
      }
      const sum = args.slice(1).reduce((acc, num) => acc + parseFloat(num), 0);
      console.log("Result:", sum);
      break;

    case 'sub':
      if (args.length !== 3) {
        console.log("Subtraction requires exactly two numbers.");
        return;
      }
      const difference = parseFloat(args[1]) - parseFloat(args[2]);
      console.log("Result:", difference);
      break;

    case 'mult':
      if (args.length < 3) {
        console.log("Multiplication requires at least two numbers.");
        return;
      }
      const product = args.slice(1).reduce((acc, num) => acc * parseFloat(num), 1);
      console.log("Result:", product);
      break;

    case 'divide':
      if (args.length !== 3) {
        console.log("Division requires exactly two numbers.");
        return;
      }
      if (parseFloat(args[2]) === 0) {
        console.log("Cannot divide by zero.");
        return;
      }
      const quotient = parseFloat(args[1]) / parseFloat(args[2]);
      console.log("Result:", quotient);
      break;

    case 'sin':
      if (args.length !== 2) {
        console.log("Sine requires exactly one number.");
        return;
      }
      const sine = Math.sin(parseFloat(args[1]));
      console.log("Result:", sine);
      break;

    case 'cos':
      if (args.length !== 2) {
        console.log("Cosine requires exactly one number.");
        return;
      }
      const cosine = Math.cos(parseFloat(args[1]));
      console.log("Result:", cosine);
      break;

    case 'tan':
      if (args.length !== 2) {
        console.log("Tangent requires exactly one number.");
        return;
      }
      const tangent = Math.tan(parseFloat(args[1]));
      console.log("Result:", tangent);
      break;

    case 'random':
      if (args.length !== 2) {
        console.log("Provide length for random number generation.");
        return;
      }
      const length = parseInt(args[1]);
      if (isNaN(length) || length <= 0) {
        console.log("Invalid length provided for random number generation.");
        return;
      }
      const randomNumber = crypto.randomBytes(length).toString('binary');
      console.log("Random Number:", randomNumber);
      break;

    default:
      console.log("Invalid operation");
  }
};
calculate(operation, args);
