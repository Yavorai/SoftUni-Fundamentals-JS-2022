function ages(age) {
  if (age >= 0 && age <= 2) {
    return "baby";
  } else if (age >= 3 && age <= 13) {
    return "child";
  } else {
    return "out of bound";
  }
}
console.log(ages(12)); 
console.log("---------");
console.log(ages(2)); 
console.log("---------");
console.log(ages(200)); 
