const Reading = require("./reading.js");

class Newspaper extends Reading {
  checkIn() {
    throw new Error("newspapers are not available for loan");
  }

  checkOut() {
    throw new Error("newspapers are not available for loan");
  }
}

module.exports = Newspaper;
