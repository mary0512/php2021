var cities = [
    "Киев",
    "Львов",
    "Харьков",
    "Одесса",
    "Монреаль",
    "Копенгаген",
    "Вена",
    "Лондон"
]
  cities.whereYouLive = "Париж"
  console.log(cities)

//   white room Кому Все19:55:13
function Person(newName) {
  let name = newName
  let lastName = 'Ivanov'

  this.setLastName = function (newLastName) {
    if (typeof newLastName === 'string') {
      lastName = newLastName
    }
  }

  this.getFullName = function() {
    return name + ' ' + lastName
  }
}

let man = new Person('Anton')

console.log(man.getFullName())

man.setLastName('Nazarov')

console.log(man.getFullName())



const test = {
    num: 0,
    valueOf: function() {
      return this.num += 1
    }
  }
  
  console.log(test == 1 && test == 2 && test == 3)