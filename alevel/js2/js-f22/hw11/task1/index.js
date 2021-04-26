//task1
console.log("task1");

let request = new XMLHttpRequest
request.open (
    "get",
    'file.json'
)

request.onload = function() {
   if ( this.status === 200 ) {
        let obj = JSON.parse ( this.response )
        obj.forEach(element => {
        let myImage = document.createElement('img');
        myImage.style.width = "200px";
        myImage.src = element.ref;
        myImage.title = element.title;
        document.body.appendChild(myImage);
        let myTitle = document.createElement('p');
        myTitle.innerText= element.title;
        document.body.appendChild(myTitle);
       });     
   }
}
request.send ()
