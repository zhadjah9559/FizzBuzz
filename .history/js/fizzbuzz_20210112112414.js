document.getElementById("fizzButton").addEventListener("click", ()=>{
    let num1 = document.getElementById("input1").value
    let num2 = document.getElementById("input2").value

   
    runTheNumbers(num1,num2)
})

function runTheNumbers(num1,num2){
    for (let loop = num1; loop < num2; loop++) {
        document.getElementById("result").innerText += loop;
        
    }
}

/premise of FizzBuzz is to ttake 2 user inputs and combine all of their multiples 
//