const Reading = require("./reading.js");

class Article extends Reading {
  constructor(title, author) {
    //Overriding the constructor of the super class, parent class.
    super(title); // giving/passing it to reading, so reading can store the title.
    //It's calling the constructor of the parent class.
    this.author = author;
    //storing author in this instance.
  }
}

module.exports = Article;
