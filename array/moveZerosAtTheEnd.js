// https://takeuforward.org/data-structure/move-all-zeros-to-the-end-of-the-array/


function moveZerosAtTheEnd(array) {

    let temp = JSON.parse(JSON.stringify(array));

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === 0) {
            const sliceEle = temp.splice(temp.indexOf(element), 1);
            temp.push(sliceEle[0]);
        }
    }

    return temp;
}

//structured clone and shallow clone and deep clone