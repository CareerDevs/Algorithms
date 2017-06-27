function factorial(num) {
   if (num == 0 || num == 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function recursiveFactorial(num) {
    console.log("Calling recursiveFactorial, num is:", num);
    if (num <= 1) {
        console.log("Finished going back up.");
        return 1;
    } else {
        console.log("Else entered, ", num, " - 1");
        var x = num * recursiveFactorial(num - 1);
        console.log("sending back:", x);
        return x;
    }
}

// return A = 3 * recursiveFactorial(3 - 1)
//     return A = 3 * 2
//     return A = 6
// return B = 2 * recursiveFactorial(2 - 1)
//     return B = 2 * 1 
//     return B = 2
// return C = 1

console.log(recursiveFactorial(3));

// recursiveFactorial(3)
// return 3 * recursiveFunction(3 - 1)

// recursiveFactorial(1)
//factorial of 5 = 120
//5 * 4!
//factorial of 4
//4 * 3!

// recursiveFactorial(5)
// num = 5
// return 5 * recursiveFactorial(5 - 1)
//     recursiveFactorial(4)
//     num = 4
//     return 4 * 6 //recursiveFactorial(4 - 1)
        // recursiveFactorial(3)
        // num = 3
        // return 3 * 2 //recursiveFactorial(3 - 1)
            // recursiveFactorial(2)
            // num = 2
            // return 2 * 1 = 2
                // recursiveFactorial(1)
                // num = 1
                // return 1