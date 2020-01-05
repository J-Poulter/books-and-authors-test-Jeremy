var Book = require('./book.js');

class Author {
  constructor(authorObj) {
    this.first = authorObj.first;
    this.last = authorObj.last;
    this.books = [];
  }
  
  write(bookTitle, bookPub) {
    var newBook = new Book(
      this.first,
      this.last,
      bookTitle,
      bookPub
    );

    this.books.push(newBook);
    return newBook;
  }
}

module.exports = Author;
