console.log("books")
let count = 1;
const getBooks = async(n = 1) => {
    let books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=quilting=${n}`);
    books = await books.json()
    return books.items
};

const getBooksList = async() => {
    const arrayBooks = [] 
    for (let i = 1; i <=5; i++){
        books = await getBooks(i);
        arrayBooks.push(...books)
    }
    return arrayBooks;
}

getBooksList().then(books => console.log(books))
