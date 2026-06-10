function findMax(arr) {

    let max = arr[0];
    for (let i of arr) {
        if (i > max) max = i;
    }
  return max;
}
console.log(findMax( [3, 1, 7, 2, 90]));
