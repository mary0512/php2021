//task3
console.log("task3");

// let changeClass = ( classname, styleString ) => ( Array.from ( document.styleSheets )
//     .filter ( sheet => !sheet.href )
//         .map (
//             sheet => Array.from ( sheet.cssRules )
//                     .filter ( rule => rule.selectorText === `.{classname}` )
//         )
//            .filter ( item => item.length > 0 )
//                .map ( item => item[0].cssText.split ("}")
//                            .join ( `${styleString}}` )
//                )
// ).length > 0 ? console.log ( "found" ) : 
//     document.head.appendChild (
//         document.createElement ( "style" )
//     ).textContent = `.${classname} {${styleString}}`

// changeClass ( "graf", "background-color: red!important;" )


let changeClass = ( classname, styleString ) => ().length > 0 ? console.log ( "found" ):
     document.head.appendChild (
         document.createElement ( "style" )
     ).textContent = `.${classname} {${styleString}}`

changeClass ( "second-level-menu", "background-color: red!important;" )