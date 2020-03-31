const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);
// });
//
// console.log("Last program line");

function addNumbers(sum = 0, numsLeft, completionCallback) {
    // reader.question("Pick a number!!!!!!", function (num) {
    //   console.log(sum += parseInt(num));
    //   reader.question("Pick another number!", function (num2) {
    //     console.log(sum += parseInt(num2));
    //     reader.question("Pick your final number!!", function (num3) {
    //       console.log(parseInt(num3) + sum);
    //
    //         reader.close();
    //     });
    //   });
    // });

    if (numsLeft > 0) {
      reader.question("Pick a number", function(num) {
        console.log(sum += parseInt(num));
        addNumbers(sum, numsLeft - 1, completionCallback);
      });
    }

    completionCallback(sum);

}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
