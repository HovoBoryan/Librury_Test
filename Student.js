const { generateId } = require('./utils');

class Student {
    constructor(prop){
        this.name = prop.name;
        this.id = generateId('student_');
    }
};

module.exports = Student;