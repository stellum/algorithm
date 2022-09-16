function max3(a, b, c) {
  maximum = a;
  if (b > maximum) {
    maximum = b;
  }
  if (c > maximum) {
    maximum = c;
  }
  return maximum;
}

console.log(`max3(3,2,1) = ${max3(3, 2, 1)}`);
console.log(`max3(3,2,2) = ${max3(3, 2, 2)}`);
console.log(`max3(3,1,2) = ${max3(3, 1, 2)}`);
console.log(`max3(3,2,3) = ${max3(3, 2, 3)}`);
console.log(`max3(2,1,3) = ${max3(2, 1, 3)}`);
console.log(`max3(3,3,2) = ${max3(3, 3, 2)}`);
console.log(`max3(3,3,3) = ${max3(3, 3, 3)}`);
console.log(`max3(2,2,3) = ${max3(2, 2, 3)}`);
console.log(`max3(2,3,1) = ${max3(2, 3, 1)}`);
console.log(`max3(2,3,2) = ${max3(2, 3, 2)}`);
console.log(`max3(1,3,2) = ${max3(1, 3, 2)}`);
console.log(`max3(2,3,3) = ${max3(2, 3, 3)}`);
console.log(`max3(1,2,3) = ${max3(1, 2, 3)}`);
