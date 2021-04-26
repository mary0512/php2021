//task1
console.log("task1");

function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`
    let letters =  message.split("");
    letters.forEach( function (leter, index) {
          setTimeout(()=>container.innerHTML += leter,velocity * index * 1000)
    });
}

typeMessage ( `Welcome to the hell`, 1 )