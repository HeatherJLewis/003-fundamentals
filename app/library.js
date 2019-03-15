let books = [
    {
        title: "Dont Make Me Think",
        author: "Steve Krug",
        isbn: 123,
        available: true
    },
    {
        title: "Site Reliability Engineering",
        author: "Niall Richard Murphy",
        isbn: 456,
        available: true
    },
    {
        title: "Fantastic Mr Fox",
        author: "Roald Dahl",
        isbn: 789,
        available: false
    }
];

function getAllBooks() {
    return books;
}

function getAllAvailableBooks() {
        const availableBooks = books.filter(book => book.available === true);
        return availableBooks;
};

function checkoutBook(isbn) {
        const checkoutABook = books.filter(book => book.isbn === isbn)
        return checkoutABook
};

module.exports = {
    getAllBooks,
    getAllAvailableBooks,
    checkoutBook
};