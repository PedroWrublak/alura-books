let btnSortByPrice = document.getElementById("btnOrdenarPorPreco");
btnSortByPrice.addEventListener('click', sortBooksByPrice);

function sortBooksByPrice() {
    let sortedBooks = books.sort((a, b) => a.preco - b.preco);
    showBooksOnScreen(sortedBooks);
}