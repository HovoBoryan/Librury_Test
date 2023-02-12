const { generateId } = require('./utils');

class Book {
    constructor(prop){
        this.title = prop.title;
        this.author = prop.author;
        this.studentId = undefined;
        this.id = generateId('book_');
    }
};

module.exports = Book;