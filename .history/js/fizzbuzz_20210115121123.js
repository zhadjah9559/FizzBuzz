document.getElementById("fizzButton").addEventListener("click", ()=>{
    let num1 = document.getElementById("input1").value
    let num2 = document.getElementById("input2").value
    let results

    //input validation
    if(  (num1 == null) && (num2 == null)  ){
        alert("Number 1 must be less than Number 2")
    } else{
        buzzItTemplate(num1,num2)
   }

});

function BuzzNumbers(num1,num2){
    //prints 1 to 100
    for (let i = 1; i <= 100; i++) {

        //if the number isn't divisible by num1 and num2, print the number itself
        if( ( (i % num1) != 0) && (  (i % num2) != 0) ){
            document.getElementById("results").innerText += i
        }
        
        //if number is divisible by both
        else if( ( (i % num1) == 0) && (  (i % num2) == 0) ){
            document.getElementById("results").innerText += "FizzBuzz"   
        }

        //if the number is divisible by only num1, then print fizz
        else if( (i % num1) == 0 ){
            document.getElementById("results").innerText += "fizz"   
        }

        //if the number is divisible by only num2, then print buzz
        else if(  (i % num2) == 0 ){
            document.getElementById("results").innerText += "buzz"   
        }        
    }



}


function clearTheNumbers(){
    document.getElementById("input1").value = ""
    document.getElementById("input1").placeholder = "Enter your Fizz number"

    document.getElementById("input2").value = ""
    document.getElementById("input1").placeholder = "Enter your fizz number"

    document.getElementById("results").value = ""
}

