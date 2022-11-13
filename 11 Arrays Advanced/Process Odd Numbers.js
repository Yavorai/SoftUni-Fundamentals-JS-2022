function demo(nums) {
  // filter only elements at odd indexes
  // map filtered elements and double them x => x * 2
  // reverse array

  let predicate = (x, i) => i % 2 == 1; 
  let filtered = nums.filter(predicate);
  let operation = x => x * 2
  let mapped = filtered.map(operation)
   mapped.reverse()
  console.log(mapped.join(" "));
}
demo([10, 15, 20, 25]);
demo([3, 0, 10, 4, 7, 3]);
