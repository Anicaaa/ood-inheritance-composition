const Reading = require("./reading.js");

class Book extends Reading {
  constructor(title, author) {
    super(title);
    this.author = author;
  }
}

module.exports = Book;
