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

// 22.12.2019
// https://www.codewars.com/kata/check-rna-nucleotides/train/javascript
/* function checkNucleotides(sequence) {
    var result1 = '';
    var result2 = '';
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] === 'A' || sequence[i] === 'G' || sequence[i] === 'C' || sequence[i] === 'U') {
            result1  += `Valid Sequence: ${sequence}`;
        } else {
            result2  += `There is an invalid letter: ${sequence[i]}. At position: ${i + 1}`;
            break;
        }
    }
    if (result1.includes("There is an invalid letter:") || result2.includes("There is an invalid letter:")) {
        return result2;
    } else {
        return `Valid Sequence: ${sequence}`;
    }
}
checkNucleotides("GAUAB");
*/
