//difference between Map and forEach

const arr = [2, 5, 3, 4, 7];

const res1 = arr.map((ar) => ar + 2);
const res2 = arr.forEach((ar) => ar + 2);
console.log(res1, res2);
//res1 will return [4, 7, 5, 6, 9]
//but res2 will be undefined

//you can add filter in map but not in forEach

//q:null vs undefined
//null is a value but undefined means the var is declared but not assigned a value
//typeof null is object but type of undefined is undefined

//undefined vs not defined
let a;
console.log(a); //undefined
//console.log(p); //ReferenceError: p is not defined

console.log(null == undefined); //true
console.log(null === undefined); //false-->type are different

//q3. Explain Event delegation
//Without Adding to each child the event listener we just added it to the parent to get it passed to the child this is known as event delegation
document.querySelector("#products").addEventListener("click", (event) => {
  console.log(event);
  if (event.target.tagName === "LI") {
    window.location.href += "#" + event.target.id;
  }
});

//q4.Array Flat
let arr2 = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12]
];
let flatten = [].concat(...arr2);
console.log(flatten);
let flat2 = arr2.flat(2);
console.log(flat2);

function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else result.push(ar);
  });
  return result;
}
console.log("custom method");
console.log(customFlat(arr2, 2));

//round2
//var vs let vs const
//var is functional scoped whereas let and const are block scoped
{
  var a1 = 1;
}
console.log(a1);
{
  let a2 = 1;
  const a3 = 1;
  console.log(a2, a3);
}
//declaration
var a1 = 10;
var a1 = 20;

let a4;
