class Library {
    books = [];
    students = [];

    constructor(prop){
        this.name = prop.name;
    }


    addBooks(newBooksData) {
        this.books = this.books.concat(newBooksData);
    }

    registerStudent(studentInfo) {
        this.students.push(studentInfo);
    }

    getStudentData(studentName) {
        return this.students.find((student) => student.name === studentName);
    }

    findBook(bookTitle){
        return this.books.find((book) => book.title === bookTitle);
    }
    
    giveBookToTheStudent(bookData, studentData){
        bookData.studentId = studentData.id;
    }

    requestBook(studentName, bookTitle) {
        const studentData = this.getStudentData(studentName);
        if (!studentData) return console.log(`\x1b[33m You are not registered dear ${studentName}! Please register to get book. \x1b[0m`);

        const bookData = this.findBook(bookTitle);
        if (!bookData) return console.log(`\x1b[33m Sorry dear ${studentName}! We don't have ${bookTitle} book. \x1b[0m`);

        this.giveBookToTheStudent(bookData, studentData);
    }

};

module.exports = Library;