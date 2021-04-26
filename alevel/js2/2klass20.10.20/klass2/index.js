// let letters = [];

// let str = "Backend As A Service".split(" ").map(function (item) {

// return item[0];

// });

// let arr = letters.push(...str);

// console.log(letters);

// console.log(letters.join(""));
var mainString = "Дела идут неплохо"
var pos = mainString.indexOf ( "идут" )
console.log ( pos )

var name = "Меня зовут Мария".slice ( 11, 16 )
console.log ( name )

var str = "веселый денек был сегодня"
console.log ( str.split ( 'е' ) )

var str = "one two three four five six"
console.log ( str.split ( ' ' ) )

var cities = [ "Неаполь", "Вашингтон", "Женева" ]

for ( var city of cities ) {
    console.log (
        `Город: ${ city.padEnd (16) } ( ${ cities.indexOf ( city ) } )`
    )
}

var cities = [ "Неаполь", "Вашингтон", "Ницца", "Женева", "Париж" ]

for ( var city of cities ) {
    console.log ( city.startsWith( "Н" ) ? city : "-" )
}


String.fromCharCode ( 123, 105, 125 )

var str = ""
for ( var x = 97; x < 105; x++ )
    str += String.fromCharCode ( x )

console.log ( str )

var cities = [ "Неаполь", "Вашингтон", "Женева" ]

for ( var i = 0; i < cities.length; i++ ) {
    console.log (
        `${ i + 1 }: ${ cities [ i ] }`
    )
}

var red = Math.round ( Math.random() * 255 ).toString(16)
var green = Math.round ( Math.random() * 255 ).toString(16)
var blue = Math.round ( Math.random() * 255 ).toString(16)

var color = `#${red}${green}${blue}`



var myArray = [ 1, 2, 3, 4, 5 ] 
console.log ( myArray.splice ( 2, 2, "*", "#", "$", "%" ) )