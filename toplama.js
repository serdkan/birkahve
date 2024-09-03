function toplama(arr) {
    let one = {};
    let two = arr[0];

    for (let item of arr) {
        one[item] = (one[item] || 0) + 1;
        if (one[item] > one[two]) {
            two = item;
        }
    }

    return two;
}


let arr = [1, 3, 2, 3, 4, 1, 1, 3];
console.log(toplama(arr));  