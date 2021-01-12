document.getElementById("fizzButton").addEventListener("click", ()=>{
    runTheNumbers(1,100)
})

function runTheNumbers(num1,num2){
    for (let loop = num1; i < num2; i++) {
        document.getElementById("result").innerText += i;
        
    }
}