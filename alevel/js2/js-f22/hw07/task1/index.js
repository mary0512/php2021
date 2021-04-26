//task1
console.log("task1");

let myElement = document.createElement('p');
document.body.appendChild(myElement)
myElement.innerText = 'click please'
myElement.addEventListener('click', function(event){
    let myImage = document.createElement('img');
    myImage.style.width = "100px";
    myImage.src = 'photo/photo1.jpg';
    document.body.appendChild(myImage)
    myImage.style.transition = "width 4s";
    myImage.addEventListener('mouseover', function(event){
        event.target.style.width = "200px";
    })
    myImage.addEventListener('click', function(event){
        event.target.remove()
    })
}
)

