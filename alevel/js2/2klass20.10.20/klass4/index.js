
// let body = document.body;

// let newDiv = document.createElement('div')
// let newDiv_1 = document.createElement('div')

// newDiv.id = 'first'

// newDiv.innerText = 'Im red'
// newDiv_1.innerText = 'Im yellow'


// newDiv.className = 'red'
// newDiv_1.className = 'yellow'

// body.appendChild(newDiv)
// body.appendChild(newDiv_1)


const pictures = [
    "https://www.insidescience.org/sites/default/files/5_heic1808a_crop.jpg",
    "https://gobelmont.ca/Portals/0/xBlog/uploads/2017/9/6/dancing-156041_960_720.png",
    "https://i2-prod.mirror.co.uk/incoming/article11840943.ece/ALTERNATES/s615/PAY-MATING-BUGS.jpg",
    "https://i.redd.it/otqqqga0ip211.jpg"
]

const divs = pictures.map (
    picture => {
        let div = document.body.appendChild (
            document.createElement ( "div" )
        )
        div.style = `
            width: 100px;
            height: 100px;
            border: solid 1px gray;
        `
        div.onclick = function ( event ) {
            let img = event.target.appendChild (
                document.createElement ( "img" )
            )
            img.src = picture
            img.width = 100
        }
        return div
})
const pictures = [
    "https://www.insidescience.org/sites/default/files/5_heic1808a_crop.jpg",
    "https://gobelmont.ca/Portals/0/xBlog/uploads/2017/9/6/dancing-156041_960_720.png",
    "https://i2-prod.mirror.co.uk/incoming/article11840943.ece/ALTERNATES/s615/PAY-MATING-BUGS.jpg",
    "https://i.redd.it/otqqqga0ip211.jpg"
]

pictures.forEach (
    picture => {
        let div = document.body.appendChild (
            document.createElement ( "div" )
        )
        div.style = `
            width: 100px;
            height: 100px;
            border: solid 1px gray;
        `
        div.onclick = function ( event ) {
            let img = event.target.appendChild (
                document.createElement ( "img" )
            )
            img.src = picture
            img.width = 100
        }
})