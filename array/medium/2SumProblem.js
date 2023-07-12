// https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/




function twoSumProblem(arr, target) {

    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const diff = target - num;

        if (map.has(diff)) {
            const diffIndex = map.get(diff);
            return [diffIndex, i];
        }

        map.set(num, i);
    }

    return [-1,-1];

}


