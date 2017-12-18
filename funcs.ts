
// each, map, reject, filter, reduce

const list = [ 'apple', '1', '2', 'dog', '3', '4', 'cat'];


function map(arr, cb) {
    const results = [];
    for(let i=0; i< arr.length;i++) {
       results.push(cb(arr[i], i));
    }
    return results;
}

function reject(arr, cb) {
    const results = [];
    for(let i=0; i<arr.length; i++) {
        if( cb(arr[i], i) === false) {
            results.push(arr[i]);
        }
    }
    return results;
}

function filter(arr, cb) {
    const results = [];
    for(let i=0; i<arr.length; i++) {
        if( cb(arr[i], i) === true) {
            results.push(arr[i]);
        }
    }
    return results;
}

function reduce(arr, cb, accum) {
    const arrayCopy = [].concat(arr);
    if ( accum == undefined) {
        accum = arrayCopy.pop();
    }

    for(let i=0; i<arr.length; i++) {
        accum = cb(accum, arr[i], i);
    }
    return accum;
}

let results = map(list, function(value, idx) {
    // console.log(value);
    return parseInt(value);
});

results = reject(results, function(value, idx) {
     return isNaN(value);
});

results = filter(results, function(value, idx) {
    return value % 2 !== 0;
});

let v = 0;
const result  = reduce(results, function(accum, value) {
    return accum + value;
},v);

function add(accum, value) {
    return accum + value;
}

function isOdd(value) {
    return value % 2 !== 0;
}

function toInt(value) {
    return parseInt(value, 10);
}

console.log(result);


// const everything = reduce(filter( reject(map(list, toInt), isNan), isOdd), add);

console.log(reduce(filter(reject(map(list, toInt), isNaN), isOdd), add, 0));


