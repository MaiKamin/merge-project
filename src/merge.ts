export function merge(
  collection_1: Number[],
  collection_2: Number[],
  collection_3: Number[]
): Number[] {
  //  collection_1 sort max to min (DESC)
  let data1 = sortDesc(collection_1);
  //  collection_2 & collection_3 sort min to max (ASC)
  let data2 = sortAsc(collection_2);
  let data3 = sortAsc(collection_3);
  
  let mergeArray = [...data1,...data2,...data3];;
  let arrayResult = sortAsc(mergeArray);
  return arrayResult;
}

function sortDesc(arr: Number[]) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function sortAsc(arr: Number[]) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/* istanbul ignore next */
if (require.main === module) {
  const result = merge([9, 7, 5], [1, 3, 4], [2, 6]);
  console.log("result:", result);
}