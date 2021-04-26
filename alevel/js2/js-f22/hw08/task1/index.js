//task1
console.log("task1");

let myTimer = function () {
    document.body.innerHTML = `<h3>${new Date().toLocaleTimeString()}</h3>`
}
  
let timerId =setInterval(()=>myTimer(),1000);
setTimeout(()=>{
    clearInterval(timerId);
},100000);