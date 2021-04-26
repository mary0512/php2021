//task3
console.log("task3");

var collection = []

function enter ( event ) {        
    event.target.style.backgroundColor = '#ffff0050';
}

function leave ( event ) {
    event.target.style.backgroundColor = '#ff00ff50';    
}

function clickHandler ( event ) {
    let child = event.target.removeChild(event.target.firstChild);
    event.target.insertBefore(child, event.target)
    event.target.remove()
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    function ( tag, index, arr  ) {
    let parentElement = collection[collection.length-1];
    let myElement = document.createElement('div');
    if (parentElement){
        myElement.style.width = parentElement.offsetWidth*0.9 + 'px';
        myElement.style.height = parentElement.offsetHeight*0.9 + 'px';
        parentElement.appendChild(myElement)
    }else {
        myElement.style.width = '300px';
        myElement.style.height = '300px'; 
        document.body.appendChild(myElement);
    }
    myElement.style.backgroundColor = '#ff00ff50';
    myElement.style.border = 'dotted 1px yellow';
    myElement.setAttribute('title', tag);
    myElement.addEventListener('mouseover', enter);
    myElement.addEventListener('mouseout', leave);
    myElement.addEventListener('click', clickHandler);
    collection.push(myElement);
    }
)
console.log(collection)