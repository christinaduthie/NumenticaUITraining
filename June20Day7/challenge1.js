// Find the common interest in books for the students

function findCommonInterestsInBooks(students) {
    const finalArray = {};
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      for (let j = 0; j < student.books.length; j++) {
       const book= student.books[j];
        if (!(book in finalArray)) {
          finalArray[book] = [];
        }
        finalArray[book].push(student.name);
      }
    }
    return finalArray;
  }

const students = [
  {
    id: 0,
    name: "Arun",
    books: ["Wings of Fire", "Chakra"],
  },
  {
    id: 1,
    name: "Ashok",
    books: ["Chakra", "War and Peace", "The Shining"],
  },
  {
    id: 2,
    name: "Balu",
    books: ["Wings of Fire", "All about Cricket"],
  },
  {
    id: 3,
    name: "Cathi",
    books: ["Against the wind", "The Shining", "War and Peace"],
  },
];
//Function call
const commonInterests = findCommonInterestsInBooks(students);
console.log(commonInterests);
   








