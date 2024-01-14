let seconds=document.querySelector("#seconds")
let start=document.querySelector("#start")
let pause=document.querySelector("#pause")
let restart=document.querySelector("#restart")
let lap=document.querySelector("#lap")
let Resetlap=document.querySelector("#resetLap")
let Ulap=document.querySelector("#Ulap")

let arr=[]
let milliSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let lapEnabled
let intervalIndex

 function sum() {
    milliSecond++
    if(milliSecond==100){
        second++
        milliSecond=0
        if(second==60){
            minute++
            second=0
            if(minute==60){
                hour++
                minute=0
            }
        }       
    }
    seconds.innerHTML=show() 
}

function show() {
    return `${hour<10?"0"+hour:hour}:${minute<10?"0"+minute:minute}:${second<10?"0"+second:second}:${milliSecond<10?"0"+milliSecond:milliSecond}`   
}

start.addEventListener("click",()=>{
    lapEnabled=true
    clearInterval(intervalIndex)
   intervalIndex= setInterval(sum,10)
})

pause.addEventListener("click",()=>{
    lapEnabled=false
    clearInterval(intervalIndex)
})

restart.addEventListener("click",()=>{
    lapEnabled=false
 milliSecond = 0;
 second = 0;
 minute = 0;
 hour = 0;
 seconds.innerHTML=show()
})

lap.addEventListener("click",()=>{

   if(lapEnabled){
    arr.push( show())
    let data=arr.map((i)=>{
        return `<li>${i}</li>`
    })
    console.log(data);
    Ulap.innerHTML=data.join("")
   }
})

Resetlap.addEventListener("click",()=>{
    arr=[]
    Ulap.innerHTML=arr.map((i)=>{
        return i
    })
})