/*Write a JavaScript function to clone an array*/
var array_Clone = function(array1) {
    return array1.slice(0);
       };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));