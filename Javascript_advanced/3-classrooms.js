/**
 * Function createClassRoom
 * @param {number} numbersOfStudents - The total number of students in the classroom.
 *
 * Requirements:
 * 1. Define a function 'studentSeat' that takes 'seat' (number) and returns a function
 * that returns the 'seat' number.
 * 2. Create an array named 'students'.
 * 3. Loop from 0 to numbersOfStudents. inside the loop:
 * - Pass the current iteration number + 1 to 'studentSeat'.
 * - Add the return value (the closure) to the 'students' array.
 * 4. Return the 'students' array.
 */

function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        }
    }

    const students = [];

    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    return students;
}

const classRoom = createClassRoom(10);