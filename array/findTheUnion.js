// https://takeuforward.org/data-structure/union-of-two-sorted-arrays/


function findTheUnion(a1, a2) {

    let temp = [];

    let p1 = 0;
    let p2 = 0;

    while (p1 < a1.length && p2 < a2.length) {

        if (a1[p1] === a2[p2]) {
            temp.push(a1[p1]);
            p1++;
            p2++
        } else if (a1[p1] < a2[p2]) {
            temp.push(a1[p1]);
            p1++;
        }
        else {
            temp.push(a2[p2]);
            p2++;
        }
    }

    while (p1 < a1.length) {
        temp.push(a1[p1]);
        p1++;
    }

    while (p2 < a2.length) {
        temp.push(a2[p2]);
        p2++;
    }

    return temp;

}