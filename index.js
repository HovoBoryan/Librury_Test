const Student = require('./Student');
const Library = require('./Library');
const Book = require('./Book');

const { studentsData, booksData } = require('./initialData');

const library = new Library({ name: '<<>> AZGAYIN GRADARAN <<>>' });

const newBooks = booksData.map(data => {
    const bookInstance = new Book(data)
    return bookInstance;
});
library.addBooks(newBooks);
const bookInstance = new Book({title: 'Kapitani Axchik', author: "Aleksandr Pushkin"});
library.addBooks([bookInstance]);

const newStudents = studentsData.map(data => {
    const bookInstance = new Student(data)
    return bookInstance;
});
const s = new Student({ name: 'Shprot' });

library.registerStudent(s);
library.registerStudent(new Student({ name: 'Grisha' }));
//console.log(newStudents);
//console.log(library);

library.requestBook('Shprot', 'Heqiatner');
library.requestBook( 'Grisha', 'Kapitani Axchik' );


console.log(library);