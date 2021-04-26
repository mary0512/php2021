function getCookies () {
    var res = document.cookie
        .split ( "; " )
        .map (
            x =>  {
                var tmp = x.split ( "=" )
                var elem = {}
                elem [ tmp [0] ] = tmp [1]
                return elem
            }
        )
    return Object.assign ( {}, ...res )
}

let myCookies = getCookies ();

if (myCookies.lastVisitDate){
    let myElement = document.createElement('p');
    myElement.innerText = myCookies.lastVisitDate;
    document.body.appendChild(myElement);
}

document.cookie = `lastVisitDate=${new Date().toLocaleString()}`; //добавила строку со временем для удобства
