// print odds 1-20
for(var i = 1; i <=20; i++) {
  if(i%2 != 0) {
    console.log(i);
  }
}

// decrease multiples of 3
for(var i = 100; i >= 0; i--) {
  if(i%3 == 0) {
    console.log(i);
  }
}

// print the sequence
for(var i = 4; i > -4; i -= 1.5) {
  console.log(i);
}

// sigma
var sum = 0;
for(var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// factorial
var product = 1;
for(var i = 1; i <= 12; i++) {
  product *= i;
}
console.log(product);