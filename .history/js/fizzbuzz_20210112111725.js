document.getElementById("fizzButton").addEventListener("click", ()=>{
    runTheNumbers(1,100)
})

function runTheNumbers(num1,num2){
    for (let loop = num1; loop < num2; loop++) {
        document.getElementById("result").innerText += loop;
        
    }
}