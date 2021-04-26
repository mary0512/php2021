//task2
console.log("task2");

var typeMessage = ( function ( velocity ) {
      let container = document.getElementById ( "demo" ) ?
          document.getElementById ( "demo" ) :
          document.body.appendChild (
              document.createElement ( "h3" )
          )
      container.style = `color: magenta;`
      var index = 0
      return function ( message ) {
        let leter = message [ index++ ]
        document.getElementsByTagName('h3')[0].innerHTML += leter;
        if (index < message.length) {
            setTimeout(()=>arguments.callee(message),velocity * 1000)
        }
      }
  })( 1 )
  
  typeMessage ( `Welcome to the hell` )