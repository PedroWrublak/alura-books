let books = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getFetchAPIBooks();


async function getFetchAPIBooks() {
    const res = await fetch(endPointAPI);
    books = await res.json();
    let discountedBooks = aplyDiscount(books)
    showBooksOnScreen(discountedBooks);
}

