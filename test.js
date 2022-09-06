const graph = {"A": 50, "B": 100};

console.log(Object.keys(graph))

for (let key in Object.keys(graph)) {
    console.log(typeof key)
    console.log(key)
}

/*
//wtf ???
function difference(i, j, elem1, elem2) {
    if (i === 0 && j === 0) {
        return 0;
    }

    if (j === 0 && i > 0) {
        return i;
    }

    if (i === 0 && j > 0) {
        return j;
    }

    if (j > 0 && i > 0) {
        Math.min(
            difference(i, j - 1, word1[i - 1], word2[j-1 - 1]) + 1,
            difference(i - 1, j, word1[i-1 - 1], word2[j - 1]) + 1,
            difference(i - 1, j - 1, word1[i-1 - 1], word2[j-1 - 1]) + findm(elem1, elem2)
        );
    }
}
let diff = difference(1,2, word1[1], word2[2]);
console.log(diff)
 */