//problem 1
function reversedString() {
    const getString = document.getElementById('uString'); //get input from user and store it into variable
    const userString = getString.value; //get value from the string

    const reversedString = userString.split('').reverse().join(''); //split characters reverse and then join them back

    const outputString = document.getElementById('output1'); //my output
    outputString.textContent = reversedString; //this calls the reversed string variable
}


//problem 2
function isPalindrome() {
    const inputNum = document.getElementById('inputs'); //get user input and store it
    const inputValue = inputNum.value; //get value from user input variable inputNum
    const inputString = inputValue.toString(); //making it into a string to be able to reverse

    const reversedString = inputString.split('').reverse().join(''); //splits the string and reverses it and joins it back

    const outputPalindrome = document.getElementById("output"); //output line of code to display on site
    if (inputString === reversedString) { //if statement that determine which text to display as output using .textContent
        outputPalindrome.textContent = "It is a palindrome";
    } else {
        outputPalindrome.textContent = "It is NOT a palindrome";
    }
}

//problem 3
function totalBill() {
    const getBill = parseFloat(document.getElementById('subtotal').value); //get input of bill
    const getTip = parseFloat(document.getElementById('tip').value); //get input of tip

    const totalBill = getBill + (getBill * getTip / 100); //formula for total bill
    const finalBill = totalBill.toFixed(2) //made this line of code to have the bill end at two decimal places. was not bale to do toFixed() on the previous line so I made an updated variable

    console.log(finalBill); //for some reason it will not go to 2 decimal places, not sure why

    const outputBill = document.getElementById('output2') //output connecting to HTML
    outputBill.textContent = "$" + finalBill; //shows what the output is
}
