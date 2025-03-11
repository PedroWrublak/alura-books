const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks() {
    const btnElement = document.getElementById(this.id);
    const categorie = btnElement.value;
    let filteredBooks = categorie == 'disponivel' ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria == categorie);
    showBooksOnScreen(filteredBooks);
}