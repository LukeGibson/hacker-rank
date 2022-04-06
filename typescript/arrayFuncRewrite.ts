const testArr: number[] = [1,2,5,4,3];


// Map replacement
const mapOperation = (item: number): number => item * 10;
type MapOperationType<T> = (item: T) => any;

function arrayMap<T>(arr: T[], operation: MapOperationType<T>) : any[] {
  let mapArray: any[] = [];
  arr.forEach((item: T) => mapArray.push(operation(item)));
  return mapArray;
}

console.log(arrayMap(testArr, mapOperation));
console.log(testArr.map(mapOperation));

// Filter replacement

const filterOperation = (item: number): boolean => item % 2 == 0;
type FilterOperationType<T> = (item: T) => boolean;

function arrayFilter<T>(arr: T[], operation: FilterOperationType<T>): T[] {
  let filterArray: T[] = [];
  arr.forEach((item: T) => {
    if (operation(item)) filterArray.push(item)
  });
  return filterArray;
}

console.log(arrayFilter(testArr, filterOperation));
console.log(testArr.filter(filterOperation));


// Reduce replacement

const reduceOperation = (acc: number, item: number): number => acc + item;
type ReduceOperationType<T> = (acc: any, item: T) => any;

function arrayReduce<T>(arr: T[], operation: ReduceOperationType<T>, initVal: any) {
  let reducedVal: any = initVal;
  arr.forEach((item: T) => reducedVal = operation(reducedVal, item));
  return reducedVal;
}


console.log(testArr.reduce(reduceOperation, 0));
console.log(arrayReduce(testArr, reduceOperation, 0));