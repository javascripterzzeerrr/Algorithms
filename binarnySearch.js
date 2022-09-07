// Функция должна найти индекс значения за время O(log n)
function binarySearch(arr, find) {
    // первым делом массив должен быть отсортирован, иначе бинарный поиск не будет работать
    arr = BubbleSort(arr);
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let center = Math.floor((low + high) / 2); // каждый раз мы будем начинать с середины массива
        if (arr[center] === find) return center;
        if (arr[center] < find) {
            low = center - 1;
        } else if (arr[center] > find) {
            high = center - 1;
        }
    }
    return false; // В случае если мы не найдем элемент в массиве
}
let test1 = [5,3,12,32,5,3,21,6,78,5,3,5,6,67,4];
let test2 = [9,8,7,6,5,4,3,2,1,0];
let test3 = [48,51,23,44,-10,37,40,1,2,3];
let test4 = [99,88,11,22,33,44,-11,-22,-30];
let test5 = [0,0,0,5,3,2,44,3,2,1];

let tests = [];

tests.push(test1)
tests.push(test2)
tests.push(test3)
tests.push(test4)
tests.push(test5)

// реализация алгоритма сортировки пузырьком
function BubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            // после первого прохода самый большой элемент окажется в конце массива
            if (arr[i] > arr[i + 1]) {
                let permutation = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = permutation;
            }
        }
    }
    return arr;
}

for (let test = 0; test < tests.length; test++) {
    console.log(BubbleSort(tests[test]));
}