//task2
console.log("task2");
var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => {
    let key = new Date().toLocaleTimeString(), x = 0
    while ( log [ `${key}[${x}]` ] ) { x++ }
    return `${key}[${x}]`
}

var log = {}
var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
)

messages.forEach (
    message => sendMessage ( message)
    .then(message =>{
        let key = messages.getKey();
        log[key] = message;
    } )
)   
