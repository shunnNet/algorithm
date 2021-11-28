function linearSearch<T>(list: T[], target: T): number {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log("lSearch" ,linearSearch([1, 2, 3], 2));
// T: O(n), S: O(1) ?

function dSearch(list: number[], target: number): number {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);

    if (target > list[middle]) {
      left = middle + 1;
    } else if (target < list[middle]) {
      right = middle;
    } else {
      return middle;
    }
  }

  return -1;
}

// console.log("dSearch" , dSearch([1,5,6,7,8,50,123,1000], 123))

function bubble(list: number[]): number[] {
  for (let i = 0; i < list.length; i++) {
    for (let l = list.length - 1; l > i; l--) {
      if (list[l - 1] > list[l]) {
        const temp = list[l]
        list[l] = list[l - 1];
        list[l - 1] = temp;
      }
    }
  }
  return list;
}
console.log(bubble([0]));

// https://break0344.medium.com/data-structures-and-algorithms-3-d01a19e87490