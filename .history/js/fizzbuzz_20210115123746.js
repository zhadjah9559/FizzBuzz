// document.getElementById("fizzButton").addEventListener("click", ()=>{
    
//     

//     //input validation
//     if(  (num1 == null) && (num2 == null)  ){
//         alert("Number 1 must be less than Number 2")
//     } else{
//         buzzItTemplate(num1,num2)
//    }

// });

function BuzzNumbers(){
    let num1 = parseInt( document.getElementById("input1").value )
    let num2 = parseInt( document.getElementById("input2").value )
    let results = document.getElementById("results")
    let output = [];

    //prints 1 to 100
    for (let i = 1; i <= 100; i++) {

        //if the number isn't divisible by num1 and num2, print the number itself
        if( ( (i % num1) != 0) && (  (i % num2) != 0) ){
            output.push(i)
        }
        
        //if number is divisible by both
        else if( ( (i % num1) == 0) && (  (i % num2) == 0) ){
            output.push("FizzBuzz")     
        }

        //if the number is divisible by only num1, then print fizz
        else if( (i % num1) == 0 ){
            output.push("fizz")    
        }

        //if the number is divisible by only num2, then print buzz
        else if(  (i % num2) == 0 ){
            output.push("buzz")  
        }        
    }
    results.innerText = output.join(", ")
let 

    for (let i = 0; i < output.length; i++) {
        const element = array[i];
        
    }
}


function clearTheNumbers(){
    document.getElementById("input1").value = ""
    document.getElementById("input1").placeholder = "Enter your Fizz number"

    document.getElementById("input2").value = ""
    document.getElementById("input1").placeholder = "Enter your fizz number"

    document.getElementById("results").value = ""
}

