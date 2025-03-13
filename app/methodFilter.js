const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks() {
    const btnElement = document.getElementById(this.id);
    const categorie = btnElement.value;
    let filteredBooks = categorie == 'disponivel' ? filterByAvailability() : newFunction(categorie);
    showBooksOnScreen(filteredBooks);
    if (categorie == 'disponivel') {
        const totalPrice = calcuteTotalAvailableBooksPrice(filteredBooks);
        displayTotalAvailableBooksPrice(totalPrice);
    }
}

function newFunction(categorie) {
    return books.filter(book => book.categoria == categorie);
}

function filterByAvailability() {
    return books.filter(book => book.quantidade > 0);
}

function displayTotalAvailableBooksPrice(totalPrice) {
    TotalAvailableBooksPriceElement.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice}</span></p>
    </div>
    `
}