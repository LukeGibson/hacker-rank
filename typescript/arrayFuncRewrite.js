var testArr = [1, 2, 5, 4, 3];
// Map replacement
var mapOperation = function (item) { return item * 10; };
function arrayMap(arr, operation) {
    var mapArray = [];
    arr.forEach(function (item) { return mapArray.push(operation(item)); });
    return mapArray;
}
console.log(arrayMap(testArr, mapOperation));
console.log(testArr.map(mapOperation));
// Filter replacement
var filterOperation = function (item) { return item % 2 == 0; };
function arrayFilter(arr, operation) {
    var filterArray = [];
    arr.forEach(function (item) {
        if (operation(item))
            filterArray.push(item);
    });
    return filterArray;
}
console.log(arrayFilter(testArr, filterOperation));
console.log(testArr.filter(filterOperation));
// Reduce replacement
var reduceOperation = function (acc, item) { return acc + item; };
function arrayReduce(arr, operation, initVal) {
    var reducedVal = initVal;
    arr.forEach(function (item) { return reducedVal = operation(reducedVal, item); });
    return reducedVal;
}
console.log(testArr.reduce(reduceOperation, 0));
console.log(arrayReduce(testArr, reduceOperation, 0));
