/*
using for 
let i;
let n=prompt("Enter the number for factorial");
var prod=1;
for(i=1; i<=n; i++){
prod = prod*i;
console.log(prod);
}
alert(`The value is ${prod}`);
console.log("The value is" + prod);
*/
// using reduce
let a=[];
var n= prompt("Enter the number for factorial");
for(i=0; i<n; i++){
    a[i]=i+1;
}
console.log(a);
const initialValue = 1;
const factl = a.reduce(
  (accumulator, currentValue) => accumulator*currentValue,
  initialValue,
);

console.log(factl);