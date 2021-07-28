// control function
// getValues from user input, fizz and buzz
function getValues() {
    // store user's fizz/buzz numbers in variables
    let fizz = parseInt(document.getElementById("fizz").value);
    let buzz = parseInt(document.getElementById("buzz").value);

    // generate results using fizzBuzz function
    let resultsArray = fizzBuzz(fizz, buzz);

    // dipslay results of fizzBuzz function (resultsArray) using displayResults function
    displayResults(resultsArray);

}

// logic function
// calculate which numbers to replace with fizz/buzz
function fizzBuzz(fizz, buzz) {
    // initialize an array to hold our results
    let resultsArray = [];

    // use a for loop to replace words divisable by 3, 5, or both with fizz, buzz, or fizzbuzz respectively
    // use the continue statement to exit the current iteration of the for loop and continue to the next
    for (let i = 1; i <= 100; i++) {
        // check divisable by fizz (default of 3)
        if (i % fizz == 0) {
            // check divisable by buzz (default of 5)
            // by looping in this order we can check both 3 and 5 at the same time
            // leaving only 5 and neither in the last condition
            if (i % buzz == 0) {
                resultsArray.push("FizzBuzz");
                continue;
            } else {
                resultsArray.push("Fizz");
                continue;
            }
        }
        // check divisable by 5. if not push number
        if (i % buzz == 0) {
            resultsArray.push("Buzz");
            continue;
        } else {
            resultsArray.push(i);
        }
    }
    // return the results to be used in getValues and displayResults functions
    return resultsArray;
}

// display function
// display the results from fizzbuzz using the resultsArray from fizzBuzz function
function displayResults(resultsArray) {
    // fancy way with template HTML tag
    // get table body element from HTML
    let tableBody = document.getElementById("results");

    // get the template row
    let templateRow = document.getElementById("fbTemplate");

    // clear table
    tableBody.innerHTML = "";

    // loop through resultsArray
    for (let i = 0; i < resultsArray.length; i+= 5) {
        let tableRow = document.importNode(templateRow.content, true);

        // grab tds and put into array to check length to determine number of columns
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(resultsArray[i])
        rowCols[0].textContent = resultsArray[i];

        rowCols[1].classList.add(resultsArray[i+1])
        rowCols[1].textContent = resultsArray[i+1];

        rowCols[2].classList.add(resultsArray[i+2])
        rowCols[2].textContent = resultsArray[i+2];

        rowCols[3].classList.add(resultsArray[i+3])
        rowCols[3].textContent = resultsArray[i+3];
        
        rowCols[4].classList.add(resultsArray[i+4])
        rowCols[4].textContent = resultsArray[i+4];

        // add all the rows to the table
        tableBody.appendChild(tableRow);
    }
}
