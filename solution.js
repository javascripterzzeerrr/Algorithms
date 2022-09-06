// Нам нужны 4 хэш-таблицы

// 1-я это сам граф
const graph = {
    start: { A: 50, B: 20 },
    A: { C: 40, D: 20 },
    B: { A: 90, D: 90 },
    C: { D: 160, finish: 50 },
    D: { finish: 20 },
    finish: {}
};

const start = 'start';
const finish = 'finish';

// Первая волна родительских нод; Какой вывод можно сделать? Начинать надо с малого, для начал заполняем только ближайших родителей
const path = { [finish]: null };
Object.keys(graph[start]).reduce((acc, child) => (acc[child] = start) && acc, path);
console.log(path);

// объект итоговых стоимостей пути, в начале у всех будеи бесконечность, а у старта 0
const costs = {};

// заполнили хэш-функцию стоимостей
for (let key in graph) {
    if (key === 'start') {
        costs[key] = 0;
    } else {
        costs[key] = 10000000000000;
    }
}
console.log('costs:', costs);

// объект родителя, чтобы знать кто от кого зависит и вовремя обновить путь в графе
// const path = {};
//
// for (let key in graph) {
//     if (Object.keys(graph[key]).length) {
//         let obj = [];
//         for (let miniKey in graph[key]) {
//             obj.push(miniKey);
//         }
//         path[key] = obj; // у родителя может быть несколько детей
//     } else {
//         // детей нет
//     }
// }
// console.log('parents:', path);

// console.log(graph.length);

// массив проверенных узлов графа, в него мы будем добавлять только тех, у кого проверили детей и обновили стоимости
let processed = [];

// функция, которая возьмет минимальный по стоимости узел
function lowestCost(costsGraph) {
    let maxInf = 100000000000001;
    let minNode = null;
    for (let key in costsGraph) {
        let node = key; // название узла
        let cost = costsGraph[node]; // стоимость
        if (cost < maxInf && !processed.includes(node)) {
            maxInf = cost;
            minNode = node
        }
    }
    return minNode;
}

// главная логика программы, пока мы будем получать минимально возможную стоимость и пока она существует цикл продолжается
let needNode = lowestCost(costs);
while(needNode !== null) {
    let cost = costs[needNode]; // взяли эту стоимость
    // проверим соседей и обновим у них значения
    console.log(needNode);
    Object.keys(graph[needNode]).forEach(children => {
        let costChildren = graph[needNode][children];
        if (cost + costChildren < costs[children]) {
            costs[children] = cost + costChildren; // обновляем стоимость ребенка, так как нашли более дешевый путь
            path[children] = needNode;
        }

        console.log(path);
    });

    processed.push(needNode);
    needNode = lowestCost(costs);
}

console.log(processed);
console.log(path);
console.log(costs);

// let minGraph = graph["start"]["A"];
//
// node = graph["start"];
// let cost = 0;
// for (let key in node) {
//     if (node[key] < minGraph) {
//         cost = node[key];
//         minGraph = key;
//     }
// }
//
// while (processed.length !== Object.keys(graph).length) {
//     let neighbours = graph[node]; // взяли соседей узла
//     // нам понадобится наша стоимость, которую мы находили на предыдущем шаге
//     // проходим по соседям и находим общий путь и самую низкую стоимость
//     let secondCost = 0;
//     for (let value in neighbours) {
//         let newConst = cost + neighbours[key];
//         if (newCost > secondCost) {
//
//         }
//     }
// }