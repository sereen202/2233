// 1. Create an array to store student data
let students = [];

// 2. Function to create a student object
function createStudent(name, age, mark) {
    return { name, age, mark };
}

// 3. Add five students to the array
students.push(createStudent("Ali", 20, 75));
students.push(createStudent("Sara", 19, 45));
students.push(createStudent("Omar", 21, 60));
students.push(createStudent("Lina", 22, 30));
students.push(createStudent("Hassan", 20, 55));

// 4. Create arrays for successful and failed students
let successStudents = [];
let failedStudents = [];

// 5. Categorize students based on their marks
for (let student of students) {
    if (student.mark >= 50) {
        successStudents.push(student);
    } else {
        failedStudents.push(student);
    }
}

// 6. Print results
console.log("Success Students:", successStudents);
console.log("Failed Students:", failedStudents);
