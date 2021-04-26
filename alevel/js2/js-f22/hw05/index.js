//task1
console.log("task1");

function sampleFunc1 () {
  console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}

function modificator1 ( func ) {
  return func.bind(null, 'test', 'sample')
}

testFunc1 = modificator1( sampleFunc1 )

testFunc1()


//task2
console.log("task2");

function sampleFunc () {
  console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}

function modificator ( func ) {
var len = func.toString().length
console.info( `Symbols in my code: ${len}` )
}

modificator( sampleFunc )

sampleFunc()

//task3
console.log("task3");

function testArguments () {
  function generateError ( numArgs ) {
    var err = new Error ();
    err.name = "Application";
    err.message = "Invalid arguments";
    err.stack = `Function needs 3 arguments, but only ${numArgs} present`;
    throw err;
  }
  try {
      arguments.length >= 3 ? null : generateError ( arguments.length );
  } 
  catch ( err ) {
      console.error ( `${err.name}: ${err.message}\n${err.stack}` );
  }
}

testArguments ( "Google" );