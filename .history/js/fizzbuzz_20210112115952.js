document.getElementById("fizzButton").addEventListener("click", ()=>{
    let num1 = document.getElementById("input1").value
    let num2 = document.getElementById("input2").value

    //input validation
    
})

function runTheNumbers(num1,num2){
    for (let i = 1; i <= 100; i++) {
        document.getElementById("results").innerText += i;   
    }
}

//premise of FizzBuzz is to take 2 user inputs and combine all of their multiples 
//between 1 and 100 
//if the loop count is a multiple of input 1, it is a fizz case
//if the loop count is a multiple of input 2, it is a Buzz case
//if the loop count is a multiple of both input it is a fizzbuzz case
//the order you test is might be be very important
