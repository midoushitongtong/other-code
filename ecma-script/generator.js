// function* loop() {
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i);
//   }
// }
// const l = loop();
// l.next(); // 0
// l.next(); // 1

// function* test() {
//   let val;
//   // 加上 * 表示右边是一个可遍历元素
//   // 调用 next() 的时候会依次遍历返回对应结果
//   val = yield* [1, 2, 3];
// }
// const t = test();
// console.log(t.next().value); // 1
// console.log(t.next().value); // 2
// console.log(t.next().value); // 3
// console.log(t.next().value); // undefined

// function* test() {
//   let val;
//   // yield 会被替换为 20
//   val = (yield [1, 2, 3]) + 7;
//   console.log(val);
// }

// const t = test();
// console.log(t.next());
// // 提前结束函数执行
// console.log(t.return(100));
// console.log(t.next(20));

// function* test() {
//   while (true) {
//     try {
//       yield 1;
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }
// const t = test();
// t.next();
// t.throw(new Error('error'));
// t.next();

// function* draw(prize1Count = 1, prize2Count = 2, prize3Count = 3) {
//   // 参数抽奖的人
//   const people = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

//   let random;
//   let result = [];

//   // 抽 1 等奖
//   for (let i = 0; i < prize1Count; i++) {
//     random = Math.floor(Math.random() * people.length);
//     result = result.concat({
//       prize: 1,
//       people: people.splice(random, 1),
//     });
//   }

//   // 抽 2 等奖
//   for (let i = 0; i < prize2Count; i++) {
//     random = Math.floor(Math.random() * people.length);
//     result = result.concat({
//       prize: 2,
//       people: people.splice(random, 1),
//     });
//   }

//   // 抽 3 等奖
//   for (let i = 0; i < prize3Count; i++) {
//     random = Math.floor(Math.random() * people.length);
//     result = result.concat({
//       prize: 3,
//       people: people.splice(random, 1),
//     });
//   }

//   return result;
// }

// const d = draw();

// console.log(d);

// function* draw(prize1Count = 1, prize2Count = 2, prize3Count = 3) {
//   // 参数抽奖的人
//   const people = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

//   let count = 0;
//   let random;

//   while (true) {
//     if (count < prize1Count) {
//       random = Math.floor(Math.random() * people.length);
//       yield {
//         prize: '1 等奖',
//         prople: people[random],
//       };
//       count++;
//       people.splice(random, 1);
//     } else if (count < prize1Count + prize2Count) {
//       random = Math.floor(Math.random() * people.length);
//       yield {
//         prize: '2 等奖',
//         prople: people[random],
//       };
//       count++;
//       people.splice(random, 1);
//     } else if (count < prize1Count + prize2Count + prize3Count) {
//       random = Math.floor(Math.random() * people.length);
//       yield {
//         prize: '3 等奖',
//         prople: people[random],
//       };
//       count++;
//       people.splice(random, 1);
//     }
//   }
// }

// const d = draw();

// console.log(d.next().value);
// console.log(d.next().value);
