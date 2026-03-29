// FizzBuzz JavaScript code

for (let i = 1; i <= 20; i++) {
    let output = "";

    if (i % 3 === 0 && i % 5 === 0) {
        output = i + " FizzBuzz";
    } 
    else if (i % 3 === 0) {
        output = i + " Fizz";
    } 
    else if (i % 5 === 0) {
        output = i + " Buzz";
    } 
    else {
        output = i;
    }

    // Display output directly on the webpage
    document.write(output + "<br>");
}
