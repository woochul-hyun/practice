// 1번
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function render() {
//   let html = '';

//   todos.forEach((todo) => {
//     html += `<li id="${todo.id}">
//       <label><input type="checkbox ${todo.completed ? 'ckeched' : ''}">${
//   todo.content
// }</label>
//     </li>
//     `;
//   });

//   return html;
// }

// console.log(render());

// /*
//   <li id="3">
//     <label><input type="checkbox">HTML</label>
//   </li>
//   <li id="2">
//     <label><input type="checkbox" checked>CSS</label>
//   </li>
//   <li id="1">
//     <label><input type="checkbox">Javascript</label>
//   </li>
//   */

// 2번
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function getValues(key) {
//   return todos.map(x => x[key]);
// }

// console.log(getValues('id')); // [3, 2, 1]
// console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
// console.log(getValues('completed')); // [ false, true, false ]

// 3번
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function sortBy(key) {
//   return todos.sort((a, b) => {
//         return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
//     });
// }

// console.log(sortBy('id'));
// /*
// [
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false }
// ]
// */
// console.log(sortBy('content'));
// /*
// [
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */
// console.log(sortBy('completed'));
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true }
// ]
// */

// 4번
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function addTodo(newTodo) {
//   todos = [newTodo, ...todos];
// }

// addTodo({ id: 4, content: 'Test', completed: false });

// console.log(todos);
// /*
// [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */

// 5번
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function removeTodo(id) {
//   todos = todos.filter(x => x.id !== id);
// }

// removeTodo(2);

// console.log(todos);
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */

// 6번
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function toggleCompletedById(id) {
//   todos.forEach((x) => {
//     if (x.id === id) {
//       Object.assign(x, { completed: !x.completed });
//     }
//   });
// }

// toggleCompletedById(2);

// console.log(todos);
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */

// 7번
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function toggleCompletedAll() {
//   const newProp = { completed: true };
//   todos.forEach((x) => {
//     Object.assign(x, newProp);
//   });
// }

// toggleCompletedAll();

// console.log(todos);
// /*
// [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: true }
// ]
// */

// 8번
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function countCompletedTodos() {
//   todos = todos.filter(x => x.completed === true);
//   return todos.length;
// }

// console.log(countCompletedTodos()); // 1
