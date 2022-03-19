// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    grade += '';
    grade = grade.split('');
    if (grade[1] > 2 && grade[1] < 5 && grade[0] > 3) {
      grade[1] = 5;
    } else if (grade[1] > 7 && grade[1] < 10 && grade[0] > 2) {
      grade[0] = Number(grade[0]) + 1;
      grade[1] = 0;
    }
    grades[i] = Number(grade.join(''));
  }
  return grades;
}

console.log(gradingStudents([73, 67, 38, 33, 99]))
