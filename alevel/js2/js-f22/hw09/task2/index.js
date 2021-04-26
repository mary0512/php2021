//task2
console.log("task2");

var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                let userIndex = users.findIndex (
                    function ( user ) {
                        return user.name === userName;
                    }
                )

                if (userIndex >= 0 && present){
                    users[userIndex].present = true;
                }
            },
            showPresent () {
                let presents = users.filter (user => user.present === true);
                presents.forEach(present => {
                    console.log(present.name)
                });
            },
            showAbsent () {
                let absents = users.filter (user => user.present === false);
                absents.forEach(absent => {
                    console.log(absent.name)
                });
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

users.showAbsent()

users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )

users.showPresent()
