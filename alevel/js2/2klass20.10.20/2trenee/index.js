// const arr = [114522, 225588999, 'fhdgdggd'];
// arr.name = 'Vasya';
// console.log(arr[0]);

// const some =0 && 1 && 100;
// console.log(some);


// const someS = 2 && 1 && 100;
// console.log(someS);

// const someSc = 2 || 1 && 1 > 2;
// console.log(someSc);

// // const arr =[1,2,3,4];
// // const foo = function(arrayOfNumbers) =>{
// //     return 
// // }

// const User = () => this.constructor;
// console.log(User())


// let t = num =>{
//     setTimeout(() =>{
//       console.log("kuku")
//     }, num*1000)
  
//   }
//   t(5)

// let number = 1;
// const timer = setInterval(() => {
//     console.log(number++)
// },2000)

// setTimeout(() =>{
//     clearInterval(timer)
// },10000)

// let number = 10;
// const timer = setInterval(() => {
//     console.log(number--)
// },1000)

// setTimeout(() =>{
//     clearInterval(timer)
// },10000)


const timer = num => {
    const timeInterval = setInterval(() => {
        if(num === 0) {
            console.log("end time")
            clearInterval(timeInterval)
            return;
        }
        console.log(num--)
    },1000)
}
timer(5);
