// 4번
// function numPY(s) {
//   if (s === undefined) return true;
//   let countY = 0;
//   let countP = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === 'Y' || s[i] === 'y') {
//       countY += 1;
//     } else if (s[i] === 'P' || s[i] === 'p') {
//       countP += 1;
//     }
//   }

//   return countP === countY;
// }

// console.log(numPY('pPoooyY')); // true
// console.log(numPY('Pyy')); // false
// console.log(numPY('ab')); // true
// console.log(numPY('')); // true
// console.log(numPY()); // true

// 5번
// function toWeirdCase(s) {
//   let newStr = '';
//   let count = 1;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ' ') {
//       newStr += ' ';
//       count = 1;
//     } else if (count % 2 === 1) {
//       newStr += s[i].toUpperCase();
//       count += 1;
//     } else {
//       newStr += s[i].toLowerCase();
//       count += 1;
//     }
//   }
//   return newStr;
// }

// console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
// console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'

// 7번
// function strToInt(str) {
//   // return parseInt(str);
//   // return Number(str);
//   // return +str;
//   // return 1*str
// }

// console.log(strToInt('1234')); // 1234
// console.log(strToInt('-1234')); // -1234

// 8번
// function waterMelon(n) {
//   let str = '';
//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//       str += '수';
//     } else {
//       str += '박';
//     }
//   }
//   return str;
// }

// console.log('n이 3인 경우: ' + waterMelon(3));
// console.log('n이 4인 경우: ' + waterMelon(4));

// 9번
// function nextSqaure(n) {
//   if (Number.isInteger(Math.sqrt(n))) {
//     return (Math.sqrt(n) + 1) ** 2;
//   }
//   return 'no';
// }

// console.log(nextSqaure()); // no
// console.log(nextSqaure(0)); // 1
// console.log(nextSqaure(1)); // 4
// console.log(nextSqaure(2)); // no
// console.log(nextSqaure(3)); // no
// console.log(nextSqaure(121)); // 144
// console.log(nextSqaure(165)); // no
// console.log(nextSqaure(400)); // 441

// 10번
// function getMaxValueFromArray(array) {
//   return Math.max.apply(null, array);
// }
// console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

// function getMinValueFromArray(array) {
//   return Math.min.apply(null, array);
// }
// console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
