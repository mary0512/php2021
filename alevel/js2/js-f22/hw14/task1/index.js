console.log("task1")

let count = 2;
const myFunction1 = () =>{
    return new Promise((res, rej)=>{
        setTimeout(() => { count = count + 1; res(count) }, 2000)
    })
}

const myFunction2 = () =>{
    return new Promise((res, rej)=>{
        setTimeout(() => { count = count * 2; res(count) }, 3000)
    })
}

// Вариант 1 с "Then"

// myFunction2().then(myCount => {
//     count = myCount;
//     myFunction1().then(myCount => {
//         count = myCount;
//         console.log(count)
//     })
// })


// Вариант 2 с "async/await"

const countCount = async () =>{
    count = await myFunction2();
    count = await myFunction1();
    console.log(count)
}

countCount()