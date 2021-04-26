//task2
console.log("task2");

var collection = []

function over ( event ) {        
    event.target.style.backgroundColor = '#ffff0050';
}

function out ( event ) {
    event.target.style.backgroundColor = '#ff00ff50';    
}

function clickHandler ( event ) {
    event.target.remove()
}

[ "first", "second", "third", "fourth" ].forEach (
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
    myElement.addEventListener('mouseover', over);
    myElement.addEventListener('mouseout', out);
    myElement.addEventListener('click', clickHandler);
    collection.push(myElement);
    }
)
console.log(collection)