// https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/


function findTheNumberThatAppearsOnceAndTheOtherNumbersTwice(array) {

    const temp = new Array(array.length).fill(0);

    for (let i = 0; i < array.length; i++) {
        temp[array[i]]++
    }

    return temp.indexOf(1);
}