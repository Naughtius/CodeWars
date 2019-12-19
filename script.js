// Первый решенный 7kyu
// https://www.codewars.com/kata/coding-3min-parallel-circuit/train/javascript
/* function resistance(arr){
    var result1 = 0;
    var result2 = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length === 1) {
            for (var n = 0; n < arr[i].length; n++) {
                result1 += 1 / arr[i][n];
            }
        }
        if (arr[i].length > 1) {
            var total = arr[i].reduce(function (a, b) {
                return a + b;
            });
            result2 += 1 / total;
        }
    }
    var endResult = 1 / (result1 + result2);
    var rounded = function(number){
        return +number.toFixed(2);
    };
    return rounded(endResult);
}
resistance([[18,20,11],[20,4],[18],[7,18,18,19],[12,1]]);
*/

function dontGiveMeFive(start, end) {
    var result = '';
    start = String(start);
    end = String(end + 1);
    for (; start < end; start++) {
        if (start / 5) {
            result += start;
        }
    }
    console.log(result);
}
dontGiveMeFive(4,17);


