// function reverseString(str) {
//     // let strToArr = str.split("").reverse().join("")
//     // console.log(strToArr);
//     //==============================
//     let final = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         final += str[i]
//     }
//     console.log(final);
// }
// reverseString("hello")

// factorial

// function factorial(num) {
//     let result = 1
//     for (let i = 1; i <= num; i++) {
//         result = result * i
//     }
//     console.log(result);

// }
// factorial(5)

// ======  ПАЛИНДРОМ ======
// function palindrome(str) {
//     let reg = /[\W_]/g
//     let smallStr = str.toLowerCase().replace(reg, "")
//     let reversed = str.split("").reverse().join("");
//     if (reversed === smallStr) {
//         console.log("palindrome");
//     } else {
//         console.log("false");
//     }
// }
// palindrome("eye")
// palindrome("toto");

//============ Find the Longest word  =================================================================

// function demo(str) {
//     let words = str.split(" ");
//     let longest = ""
//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
//     console.log(longest.length);
//         // или със sort и се взима първата дума
// }
// demo("The quick brown fox jumped over the lazy dog")

// ======= Titlecase ===========

// function demo(str) {
// let words = str.toLowerCase().split(" ")
// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1)
// }
// console.log(words.join(' '));

// second way ======================
//     let title = str.toLowerCase().split(" ").map(function(el) {
//         return el[0].toUpperCase() + el.slice(1)
//     })
//     console.log(title.join(" "));
// }
// demo("I'm a little tea pot")

//=================================
// biggest numbers in arrays

// function demo(arr) {
// let maxes = [];
// for (let i = 0; i < arr.length; i++) {
//     let tempMax = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//         let currEl = arr[i][j];
//         if (currEl >= tempMax) {
//             tempMax = currEl;
//         }
//     }
//     maxes.push(tempMax);
// }
// console.log(maxes.join(" "));

// other way is =================================================
// let maxes = [0, 0, 0, 0];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         let curr = arr[i][j];
//         if (curr >= maxes[i]) {
//             maxes[i] = curr;
//         }
//     }
// }
// console.log(maxes);

//     function findMax(arr) {
//         let max = arr[0]
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > max) {
//                 max = arr[i];
//             }
//         }
//         return max;
//     }

//     let maxes = [];
//     for (let i = 0; i < arr.length; i++) {
//         let innerMax = findMax(arr[i]);
//         maxes.push(innerMax);
//     }
//     console.log(maxes.join(" "));
// }
// demo([
//     [3, 5, 8],
//     [2, 8, 88],
//     [111, 555555, 6],
//     [111, 666666666666666, 6]
// ])

// Confirm the Endings ============================

// function demo(str, target) {
//     // if (str.endsWith(target)) {
//     //     return true
//     // }
//     // return false

//     //======================== substr =================

//     // if (str.substr(-target.length) === target) {
//     //     return true
//     // }
//     //     return false
//     // ================  slice  =================

//     return str.slice(-target.length) === target
// }
// let result = demo("Bastian", "n")
// console.log(result);

//======================================== REPEAT STR NUM TIMES

// function demo(str, num) {
// if (num < 0) {
//     return ""
// }
// return str.repeat(num)

// ===============================

// let final = ""

// if (num < 0) {
//     return ""
// }
// for (let i = 0; i < num; i++) {
//     final += str
// }
// return str.repeat(num)

// }
// let result = demo("abc", 3)
// console.log(result);
// =================== recursion =================
// function repeatStrNumStr(str, num) {
//     if (num < 0) return ""
//     if (num === 1) return str // base case
//     return str + repeatStrNumStr(str, num - 1)
// }

// let result = repeatStrNumStr("abc", 3)
// console.log(result);

// ===============   truncate a str    ============================

// function demo(str, num) {
//     if (num >= str.length) return str
//     if (num <= 3) return str.slice(0, num) + "...";
//     return str.slice(0, num - 3) + "...";
// }
// let result = demo("A-tisket a-tasket A green and yellow basket", 11)
// console.log(result);

// ======================== chunk arrays

// function demo(arr, size) {
// let groups = []
// while (arr.length > 0) {
//     groups.push(arr.slice(0, size))
//     arr = arr.slice(size)
// }
// return groups

// with splice

//     let groups = []
//     while (arr.length > 0) {
//         groups.push(arr.splice(0, size))
//             //arr = arr.slice(size)
//     }
//     return groups

// }
// let result = demo(["a", "b", "c", "d", "t"], 2)
// console.log(result);

//=================

// function demo(arr, howMany) {
//     arr.splice(0, howMany)
//     return arr
// }
// let result = demo([1, 2, 3], 2)
// console.log(result);

//=========================  MUTATION

// function demo(arr) {
//     let first = arr[0].toLowerCase()
//     let second = arr[1].toLowerCase()
//         // for (let i = 0; i < second.length; i++) {
//         //     if (first.indexOf(second[i]) === -1) {
//         //         return false
//         //     }
//         // }
//         // return true

//     // или

//     for (let letter of second) {
//         if (first.indexOf(letter) === -1) {
//             return false;
//         }
//     }
//     return true
// }
// let re = demo(["hello", "hey"]);
// console.log(re);

//======================================================================

function demo(arr) {
    // let trueOnce = [];
    // for (let elem of arr) {
    //     if (elem) {
    //         trueOnce.push(elem)
    //     }
    // }
    // return trueOnce

    // Или 

    return arr.filter(function(elem) {
        return elem
    })

}
let re = demo([7, "ate", "", false, 9])
console.log(re);