// *** Write your code here***
let display = document.querySelector("#display")
let clearNum = document.querySelector("#clearNumbers")


function calcNumbers(x){
    display.value = display.value + x;
}

clearNum.addEventListener('click', ()=>{
    if ("c"){
        display.value =""
    }
})

function deleteNum(){
    if("del"){
        let arr=display.value.split("")
        arr.pop()
        display.value=arr.join("")
    }
}