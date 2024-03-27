const makeChange = (c) => {
  // your name here
	// Define the values of each coin
    const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    // Initialize counters for each coin
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    // Convert the input to a number
    c = parseInt(c);

    // Calculate the number of each coin needed
    while (c > 0) {
        if (c >= quarterValue) {
            quarters += Math.floor(c / quarterValue);
            c %= quarterValue;
        } else if (c >= dimeValue) {
            dimes += Math.floor(c / dimeValue);
            c %= dimeValue;
        } else if (c >= nickelValue) {
            nickels += Math.floor(c / nickelValue);
            c %= nickelValue;
        } else {
            pennies += c;
            c = 0;
        }
    }

    // Construct and return the result object
    return { q: quarters, d: dimes, n: nickels, p: pennies };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
