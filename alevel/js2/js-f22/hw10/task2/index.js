//task2
console.log("task2");

function User ( name ) {
    this.name = name
    var presence = false
    Object.defineProperty(this, "presence", {
        get() {
            return `"${this.name} is ${presence ? 'present' : 'absent'}"`
        }, 
        set(value) {
            if (value) {
                presence = true;
            }
        }
    })
}

let user = new User ( "Ivan" )
console.info ( user.presence )

user.presence = "+"
console.info ( user.presence )