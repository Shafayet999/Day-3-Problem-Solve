function chunkArray(arr, size) {
    const chunked = [];
    let idx = 0;

    while (idx < arr.length) {
        chunked.push(arr.slice(idx, idx + size));
        idx += size;
    }
    return chunked;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));