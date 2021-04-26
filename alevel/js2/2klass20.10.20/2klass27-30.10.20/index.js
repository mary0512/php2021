// As callback

// const getItems = (callback) => {
//     document.body.innerText = 'Loading...'
//     const url = 'https://www.googleapis.com/books/v1/volumes?q=quilting='

//     const xhr = new XMLHttpRequest();
    
//     xhr.open('GET', url);
//     xhr.onload = () => callback(xhr)
//     xhr.onerror = () => console.log('Server error')
//     xhr.send()
// }


const getItems = () => {
    return new Promise((res, rej) => {
        document.body.innerText = 'Loading...'  
        const url = 'http://192.168.3.100:3000/'

        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', url);
        xhr.onload = () => {
            const data = JSON.parse(xhr.response)
            res(data)
        }
        xhr.onerror = () => console.log('Server error')
        xhr.send()
    })
}

const renderItems = items => {
    document.body.innerHTML = '';
    for (let item of items) {
        document.body.innerHTML += `
            <div class="card">
                <img src=${item.volumeInfo.imageLinks.thumbnail} alt="">
                <h6>${item.volumeInfo.title}</h6>
                <p>${item.volumeInfo.subtitle}</p>
                <a href=${item.volumeInfo.previewLink}>Link</a>
            </div>
        `
    }
}

getItems().then((data) => {
    console.log(data)
    // renderItems(data.items)
})