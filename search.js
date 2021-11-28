function linearSearch(list, target) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] === target) {
            return i;
        }
    }
    return -1;
}
// console.log("lSearch" ,linearSearch([1, 2, 3], 2));
// T: O(n), S: O(1) ?
function dSearch(list, target) {
    var left = 0;
    var right = list.length - 1;
    while (left <= right) {
        var middle = Math.floor((right + left) / 2);
        if (target > list[middle]) {
            left = middle + 1;
        }
        else if (target < list[middle]) {
            right = middle;
        }
        else {
            return middle;
        }
    }
    return -1;
}
// console.log("dSearch" , dSearch([1,5,6,7,8,50,123,1000], 123))
function bubble(list) {
    for (var i = 0; i < list.length; i++) {
        for (var l = list.length - 1; l > i; l--) {
            if (list[l - 1] > list[l]) {
                var temp = list[l];
                list[l] = list[l - 1];
                list[l - 1] = temp;
            }
        }
    }
    return list;
}
console.log(bubble([0]));
