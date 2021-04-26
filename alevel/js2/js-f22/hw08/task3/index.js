//task3
console.log("task3");

function User ( name ) {
    this.name = name
    this.id = this.counter()
}

User.cnt = 0;
User.prototype.counter = function(){
    return this.id ? this.id : User.cnt++;
}

var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]

users[1].id = users[1].counter()
console.log(users)
