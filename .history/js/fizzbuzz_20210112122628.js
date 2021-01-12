document.getElementById("fizzButton").addEventListener("click", ()=>{
    let num1 = document.getElementById("input1").value
    let num2 = document.getElementById("input2").value

    //input validation
    if(  (num1 == null) && (num2 == null)  ){
        alert("Number 1 must be less than Number 2")
    } else{
        runTheNumbers(num1,num2)
   }
})

function runTheNumbers(num1,num2){
    //prints 1 to 100
    for (let i = 1; i <= 100; i++) {

        //if the number isn't divisible by num1 and num2, print the number itself
        if( ( (i % num1) != 0) && (  (i % num2) != 0) ){
            document.getElementById("results").innerText += i;   
        }

        //if the number is divisible by num1, then print fizz
        else if( (i % num1) == 0 ){
            document.getElementById("results").innerText += "fizz";   
        }

        //if the number is divisible by num2, then print buzz
        else if(  (i % num2) == 0 ){
            document.getElementById("results").innerText += "buzz";   
        }


    }
}

function clearTheNumbers(num1,num2){
}

//premise of FizzBuzz is to take 2 user inputs and combine all of their multiples 
//between 1 and 100 
//if the loop count is a multiple of input 1, it is a fizz case
//if the loop count is a multiple of input 2, it is a Buzz case
//if the loop count is a multiple of both input it is a fizzbuzz case
//the order you test is might be be very important