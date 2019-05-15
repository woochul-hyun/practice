// function evenOrOdd(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   }
//   return 'Odd';
// }

// console.log(evenOrOdd(2)); // Even
// console.log(evenOrOdd(3)); // Odd
// console.log(evenOrOdd(1000)); // Even

// function evenOrOdd(num) {
//   const result = num % 2 === 0 ? 'even' : 'odd';
//   return result;
// }

// console.log(evenOrOdd(2)); // Even
// console.log(evenOrOdd(3)); // Odd
// console.log(evenOrOdd(1000)); // Even

// function getCount8() {
//   let count = 0;
//   let num = '';
//   for (let i = 0; i < 10000; i++) {
//     num += String(i);
//   }
//   for (let j = 0; j < num.length; j++) {
//     if (num[j] === '8') {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(getCount8()); // 4000

// function alphaString46(s) {
//   if (s === undefined || s.length < 4 || s.length > 6 || isNaN(s)) {
//     return false;
//   }
//   return true;
// }

// console.log(alphaString46('1234')); // true
// console.log(alphaString46('9014')); // true
// console.log(alphaString46('723')); // false
// console.log(alphaString46('a234')); // false
// console.log(alphaString46('')); // false
// console.log(alphaString46()); // false
