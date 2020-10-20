// const arr = [1, [2, [3]]];
// console.log(arr.flat(2));

// const arr2 = [1];
// console.log(arr2.flatMap((item) => [item * 2]));

// function flat(arr = [], depth = 1) {
//   const result = [];

//   function deep(arr, depth) {
//     arr.forEach((item) => {
//       if (Array.isArray(item) && depth >= 1) {
//         deep(item, depth - 1);
//       } else {
//         result.push(item);
//       }
//     });
//   }

//   deep(arr, depth);

//   return result;
// }

// let str = '   foo   ';

// // 删除前面的空格
// console.log(str.replace(/^\s+/g, ''));
// // 删除后面的空格
// console.log(str.replace(/\s+$/g, ''));

// console.log(str.trimEnd());
// console.log(str.trimStart());

// const str = `"food" and "bar" and "baz"`;
// function select(reg, str) {
//   const result = [];
//   while (true) {
//     const match = reg.exec(str);
//     if (match) {
//       result.push(match);
//     } else {
//       break;
//     }
//   }
//   return result;
// }
// function select2(reg, str) {
//   const results = [];
//   str.replace(reg, function (_all, first) {
//     results.push(first);
//   });
//   return results;
// }
// function select3(reg, str) {
//   const results = [];
//   for (const match of str.matchAll(reg)) {
//     results.push(match);
//   }
//   return results;
// }
// console.log(str.match(/"([^"]*)"/g));
// console.log(select3(/"([^"]*)"/g, str));

// const arr = [
//   ['foo', 1],
//   ['bar', 2],
// ];
// const obj = Object.fromEntries(arr);
// console.log(obj.bar);

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// const res = Object.fromEntries(
//   Object.entries(obj).filter(([key]) => key !== 'c')
// );
// console.log(res);

// for (const a of obj) {
//   console.log(a);
// }

const a = 11n;
console.log(a);
