/**
 * Module studentHogwarts
 * * Behavior:
 * This function simulates a class with private variables and methods.
 * It uses a closure to maintain the state of 'privateScore' and 'name'.
 * * Private Members:
 * - privateScore (Number): initialized to 0.
 * - name (String): initialized to null.
 * - changeScoreBy(points): increases or decreases privateScore.
 * * Public Methods (returned object):
 * - setName(newName): updates the private 'name' variable.
 * - rewardStudent(): calls changeScoreBy(1).
 * - penalizeStudent(): calls changeScoreBy(-1).
 * - getScore(): returns string "<name>: <privateScore>".
 */

function studentHogwarts() {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

    return {
        setName: function (newName) {
            name = newName;
        },
        rewardStudent: function () {
            changeScoreBy(1);
        },
        penalizeStudent: function () {
            changeScoreBy(-1);
        },
        getScore: function () {
            return name + ': ' + privateScore;
        }
    };
}

// Logic for Harry
const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

// Logic for Draco
const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
