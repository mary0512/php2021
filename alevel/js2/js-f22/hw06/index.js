//task1
console.log("task1");


let tags = [
    "div",
    "p",
    "h2",
    "a"
];

let classes = [
    "red",
    "blue",
    "yellow",
    "pink",
    "green",
    "lightblue",
    "violet"
];

let myStyle = document.createElement("style");
document.head.appendChild(myStyle)
for ( item of classes){
    myStyle.appendChild(
        document.createTextNode(
            `.${item} { color: ${item} }`
        ) 
    )
};

for ( index in tags){
    let tag = document.createElement(tags[index]);
    tag.classList.add(classes[index])
    tag.innerText="My color"
    document.body.appendChild(tag)
}

for ( tag of tags){
    let myTag = document.createElement(tag)
    myTag.classList.add(classes[Math.floor(Math.random()*classes.length)])
    myTag.innerText="My random color"
    document.body.appendChild(myTag)
}

//Task2
console.log("task2");

let tags2 = [
    {
        name: 'div',
        style: 'color:red;',
        text: 'task 06-02 obj.1',
        event: 'click',
        eventFunc:()=>{
            console.log("click");
        }

    },
    {
        name: 'p',
        style: 'color:blue;',
        text: 'task 06-02 obj.2',
        event: 'mousemove',
        eventFunc:()=>{
            console.log("mousemove");
        }
    },
    {
        name: 'h2',
        style: 'color:yellow;',
        text: 'task 06-02 obj.3',
        event: 'mousedown',
        eventFunc:()=>{
            console.log("mousedown");
        }
    },
    {
        name:'a',
        style: 'color:pink;',
        text: 'task 06-02 obj.4',
        event: 'mouseover',
        eventFunc:()=>{
            console.log("mouseover");
        }
    }
];

for (myObj2 of tags2){
    let myTag2 = document.createElement(myObj2.name);
    myTag2.innerText= myObj2.text
    myTag2.setAttribute('style', myObj2.style)
    myTag2.addEventListener(myObj2.event, myObj2.eventFunc)
    document.body.appendChild(myTag2)
}

//task3

document.querySelectorAll("body > :not(script)").forEach(function(item) {item.classList.add("redBack")});

let myStyleTask3 = document.querySelector("style");
myStyleTask3.appendChild(
            document.createTextNode(
                `.redBack {
                    background-color: red!important;
                }`
            ) 
        )
