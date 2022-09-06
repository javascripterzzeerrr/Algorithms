let word1 = "ГИБРАЛТАР";
let word2 = "ЛАБРАДОР";

let matrix = [];

// Заполняем матрицу нулями по длине слов
for (let i = 0; i <= word1.length; ++i) {
    matrix.push([]);
    for (let j = 0; j <= word2.length; ++j) {
        matrix[i].push(0);
    }
}

// функция для вывода массива
function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        let str = '';
        for (let j = 0; j < arr[0].length; ++j) {
            str += arr[i][j] + ' ';
        }
        console.log(str);
        if (i !== arr.length - 1) {
            console.log('-------------------');
        }
    }
}
console.log("\n")
console.log("\n")
printArr(matrix);

// попробуем написать логику алгоритма
function levensteinIsAlgorithm() {
    for (let i = 0; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            // заполняем первую строку и первый столбец матрицы индексами
            if (i === 0 && j === 0) {
                matrix[i][j] = 0;
            } else if (j === 0 && i > 0) {
                matrix[i][j] = i;
            } else if (i === 0 && j > 0) {
                matrix[i][j] = j;
            }
            printArr(matrix);

            console.log("\n");

            // Далее нам нужно проверять символы на равенство
            if (j > 0 && i > 0) {
                let A = matrix[i][j-1] + 1;
                let B = matrix[i-1][j] + 1;
                let C = matrix[i-1][j-1] + findm(word1[i-1], word2[j-1]);
                matrix[i][j] = Math.min(A,Math.min(B,C));
            }
            printArr(matrix);
        }
    }

    return matrix[word1.length][word2.length];
}

console.log("minimum number of transformations in a word", levensteinIsAlgorithm());


function findm(elem1, elem2) {
    if (elem1 !== elem2) {
        return 1;
    } else {
        return 0;
    }
}