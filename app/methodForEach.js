const booksElement = document.getElementById("livros");
const TotalAvailableBooksPriceElement = document.getElementById("valor_total_livros_disponiveis");

function showBooksOnScreen(bookList) {
  TotalAvailableBooksPriceElement.innerHTML = "";
  booksElement.innerHTML = "";
  bookList.forEach((book) => {
//    let availability = verifyBookAvailability(book);
    let availability = book.quantidade > 0 ? 'livro__imagem' : 'livro__imagem indisponivel';
    booksElement.innerHTML += `
    <div class="livro">
      <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>
        `;
  });
}

// function verifyBookAvailability(book) {
//   if (book.quantidade > 0) {
//     return `livro__imagens`
//   } else {
//     return 'livro__Imagens indisponivel'
//   }
// }