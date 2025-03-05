let books = [];
const EndPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getFetchAPIBooks();
const booksElement = document.getElementById('livros');

async function getFetchAPIBooks() {
    const res = await fetch(EndPointAPI);
    books = await res.json();
    console.table(books);
    showBooksOnScreen(books);
}

function showBooksOnScreen(bookList) {
    bookList.forEach((book) => {
        booksElement.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>
        `
    })
}