const library = require('../app/library');

test('Check we have all books and stocked correctly', () => {
  let expectedBooksInLibrary = [
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
  expect(library.getAllBooks()).toEqual(expectedBooksInLibrary);
});

test('Check available books', () => {
  let availableBooksInLibrary = [{
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
}];

  expect(library.getAllAvailableBooks()).toEqual(availableBooksInLibrary);
});

test('Checkout a book', () => {
  let bookToCheckout = [{
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    isbn: 789,
    available: false
  }];
  expect(library.checkoutBook(789)).toEqual(bookToCheckout);
})