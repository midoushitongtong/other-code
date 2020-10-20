// console.log([1, [2, [3, [5, [23]]]]].flat(5));

// console.log([1, 2, 3].flatMap((item) => [item * 2]));

// console.log('   foo   '.replace(/\s/g, ''));
// console.log('   foo   '.trimLeft());
// console.log('   foo   '.trimRight());

// function select(regExp, str) {
//   const matchs = [];
//   while (true) {
//     const match = regExp.exec(str);
//     if (match == null) {
//       break;
//     }
//     matchs.push(match[1]);
//   }
//   return matchs;
// }
// console.log(select(/"([^"]*)"/g, `"foo" and "bar" and "baz"`));

// console.log(`"foo" and "bar" and "baz"`.match(/"([^"]*)"/g));

// function select(regExp, str) {
//   const matchs = [];
//   str.replace(regExp, function (all, first) {
//     matchs.push(first);
//   });
//   return matchs;
// }
// console.log(select(/"([^"]*)"/g, `"foo" and "bar" and "baz"`));

// function select(regExp, str) {
//   const matchs = [];
//   for (const match of str.matchAll(regExp)) {
//     matchs.push(match[1]);
//   }
//   return matchs;
// }
// console.log(select(/"([^"]*)"/g, `"foo" and "bar" and "baz"`));

// const arr = [
//   ['foo', 1],
//   ['bar', 2],
// ];
// console.log(Object.fromEntries(arr));

// const arr = [
//   ['foo', 1],
//   ['bar', 2],
//   ['bar33', 3],
// ];
// console.log(Object.fromEntries(arr));

// const arr = {
//   foo: 1,
//   bar: 2,
//   bar33: 3,
// };
// console.log(
//   Object.fromEntries(Object.entries(arr).filter(([key]) => key.length === 3))
// );

// try {
//   throw new Error('');
// } catch {
//   console.log('error');
// }

// console.log(typeof 11n);

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
// console.log(flat([[1], 2, 3, [3, [4]]], 2));

// console.log(
//   Object.fromEntries(new URL('http://127.0.0.1?a=1&b=2').searchParams.entries())
// );
