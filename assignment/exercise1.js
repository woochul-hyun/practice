// // 1번
// const x = 15;
// if (x > 10 && x < 20) console.log(x);

// // 2번
// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// // 3번
// const Arr3 = [];
// for (let i = 0; i < 10; i += 2) {
//   Arr3.push(i);
// }

// console.log(Arr3.join(''));

// // 4번
// for (let i = 9; i > 0; i -= 2) {
//   console.log(i);
// }

// // 5번
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i += 2;
// }

// // 6번
// let i = 9;
// while (i > 0) {
//   console.log(i);
//   i -= 2;
// }

// // 7번
// let total = 0;
// for (let i = 0; i < 10; i++) {
//   total += i;
// }

// console.log(total);

// // 8번
// let total = 0;
// for (let i = 1; i < 20; i++) {
//   if (i % 2 !== 0 && i % 3 !== 0) {
//     total += i;
//   }
// }
// console.log(total);

// // 9번
// let total = 0;
// for (let i = 1; i < 20; i++) {
//   if (i % 2 === 0 || i % 3 === 0) {
//     total += i;
//   }
// }
// console.log(total);

// // 10번
// for (let i = 1; i <= 6; i++) {
//   for (let j = 1; j <= 6; j++) {
//     if (i + j === 6) console.log([i, j]);
//   }
// }

// // 11 번
// let star = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     star += '*';
//   }

//   star += '\n';
// }
// console.log(star);

// // 12번
// let star = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (i > j) star += ' ';
//     else star += '*';
//   }

//   star += '\n';
// }
// console.log(star);

// // 13번
// let star = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = i; j < 5; j++) {
//     star += '*';
//   }

//   star += '\n';
// }
// console.log(star);

// // 14번
// let star = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 4; j >= 0; j--) {
//     if (i < j) star += ' ';
//     else star += '*';
//   }

//   star += '\n';
// }
// console.log(star);

// // 15번
// let star = '';
// for (let i = 0; i < 10; i += 2) {
//   for (let j = 8; j > i; j -= 2) {
//     star += ' ';
//   }

//   for (let j = 0; j < i + 1; j++) {
//     star += '*';
//   }
//   star += '\n';
// }

// console.log(star);

// // 16번
// let star = '';
// for (let i = 10; i > 0; i -= 2) {
//   for (let j = 10; j > i; j -= 2) {
//     star += ' ';
//   }

//   for (let j = 0; j < i - 1; j++) {
//     star += '*';
//   }
//   star += '\n';
// }

// console.log(star);
