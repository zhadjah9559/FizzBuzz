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
        //********for multiples of 3, print the word "fizz" instead of the number*********
        
        //if the number is divisible by 3, then print fizz
        if( (i % 3) == 0 )
        {
            document.getElementById("results").innerText += ;   
        }




        /*********************************************** */



        //for multiples of 5, print the word "buzz" instead of the number



    }
}

//premise of FizzBuzz is to take 2 user inputs and combine all of their multiples 
//between 1 and 100 
//if the loop count is a multiple of input 1, it is a fizz case
//if the loop count is a multiple of input 2, it is a Buzz case
//if the loop count is a multiple of both input it is a fizzbuzz case
//the order you test is might be be very important