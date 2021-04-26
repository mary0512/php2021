//task1
console.log("task1");

let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

var log = {}

var sendMessage = ( message, callback ) => 
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )

getKey = () => {
    let key = new Date().toLocaleTimeString(), x = 0
    while ( log [ `${key}[${x}]` ] ) { x++ }
    return `${key}[${x}]`
}

handler = (message) => {
    let key = getKey();
    log[key] = message;
}

messages.forEach (
    message => sendMessage ( message, handler )
)   