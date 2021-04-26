//задание 3
function testUserText ( userText ) {
    return userText.replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');//замена символов спец символами
}
function insertUserText ( userText ) {
    var x = document.createElement( 'div' )
    x.innerHTML = testUserText(userText)
    document.body.appendChild(x)
}

insertUserText (`<svg/onload='document.write("Looser");
                document.body.style.backgroundColor="black";
                document.body.style.color="red";
                document.body.style.fontSize="50px";
                document.body.style.fontWeight="bold";
                document.body.style.textAlign="center";
                document.body.style.paddingTop="45%";'>`)


//задание 1
var letters = [];
var str = "Backend As A Service";
var words = str.split(' ');
for (let word of words) {
  letters.push(word[0])  
}
console.log(letters)
console.log(letters.join(""))

// задание 2
function mary(a){
    if(typeof a === "number"){
      return new Date().toLocaleString();
    } else {
      return "Неверный тип данных";
    }
  }
  
  console.log(mary(1))
  console.log(mary('bjbgjhgj'))







