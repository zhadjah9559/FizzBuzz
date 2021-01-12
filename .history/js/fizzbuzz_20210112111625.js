document.getElementById("fizzButton").addEventListener("click", ()=>{
    runTheNumbers
})

function runTheNumbers(num1,num2){
    for (let i = num1; i < num2; i++) {
        document.getElementById("result").innerText += i;
        
    }
}