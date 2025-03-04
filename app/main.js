let books = [];
const EndPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getFetchAPIBooks()

async function getFetchAPIBooks() {
    const res = await fetch(EndPointAPI);
    books = await res.json();
    console.table(books);
} 