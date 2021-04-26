//task3
console.log("task3");

var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => new Date().toLocaleTimeString()

var log = {}
var sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
)

var sendAll = () => {
    var index = 0
    function recursive () {
        if (index < messages.length) {
            sendMessage(messages[index])
            .then(message =>{
                        let key = messages.getKey();
                        log[key] = message;
                        index++;
                        recursive ();
                    })
        } else {
            return;
        }
    }
    recursive ()
}
sendAll()