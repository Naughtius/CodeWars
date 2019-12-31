// Первый решенный 7kyu
// https://www.codewars.com/kata/coding-3min-parallel-circuit/train/javascript
/*
function resistance(arr){
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
/*
function checkNucleotides(sequence) {
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

// 23.12.2019
// https://www.codewars.com/kata/regex-validate-pin-code/train/javascript
/*
function validatePIN (pin) {
    if (pin.length === 5) {
        return false;
    } else if (pin.length >= 4 && pin.length <= 6) {
        for (var i = 0; i < pin.length; i++) {
            if (!/[^0-9]/gim.test(pin)) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}
validatePIN("1234");
*/

// 25.12.2019
// https://www.codewars.com/kata/mumbling/train/javascript
/*
function accum(s) {
    s = s.toLowerCase();
    var result = '';
    for (var i = 0; i < s.length; i++) {
        var str = s[i].repeat(i + 1);
        var newStr = str[0].toUpperCase() + str.slice(1);
        result += newStr + '-';
    }
    result = result.slice(0, -1);
    return result;
}
accum("ZpglnRxqenU");
*/

// 25.12.2019
// https://www.codewars.com/kata/get-the-middle-character/train/javascript
/*
function getMiddle(s) {
    if (s.length % 2) {
        var str = s.length / 2;
        str = Math.floor(str);
        return s.substr(str, 1);
    } else {
        var strNew = s.length / 2;
        return s.substr(strNew - 1, 2);
    }
}
getMiddle("testing");
*/

// 25.12.2019
// https://www.codewars.com/kata/shortest-word/train/javascript
/*
function findShort(s){
    s = s.split(' ');
    var result = [];
    for (var i = 0; i < s.length; i++) {
        result.push(s[i].length);
    }
    result = Math.min.apply(null, result);
   return result;
}
findShort("turns ou random test cases are easier than writing out basic ones");
*/

// 26.12.2019
// https://www.codewars.com/kata/descending-order/train/javascript
/*
function descendingOrder(n){
    n = String(n).split('');
    var result = [];
    for (var i = 0; i < n.length; i++) {
        result.push(Number(n[i]));
    }
    result.sort(function(a,b){
        return b - a;
    });
    return Number(result.join(''));
}
descendingOrder(1);
*/

// 30.12.2019
// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript
// Первый решенный 6kyu...
/*
function digital_root(n) {
    n = String(n);
    var res = 0;
    for (var i = 0; i < n.length; i++) {
        res += Number(n[i]);
    }
    res = String(res);
    var res1 = 0;
    for (var k = 0; k < res.length; k++) {
        if (String(res).length === 1) {
            return Number(res);
            break;
        }
        res1 += Number(res[k]);
    }
    return res1;
}
digital_root(456);
*/

