function demo(arr) {
  let k = arr.shift();

  let forward = [];
  for (let i = 0; i < k; i++) {
    forward.push(arr[i]);
  }
  let backwards = [];
  for (let i = arr.length - k; i < arr.length; i++) {
    backwards.push(arr[i]);
  }
  console.log(forward.join(" "));
  console.log(backwards.join(" "));
}
demo([2, 7, 8, 9]);
demo([3, 6, 7, 8, 9]);

//====================
// така не се модифицира оригиналния масив
function demo(arr) {
  let k = arr[0];

  let forward = arr.slice(1, k + 1);
  let backwards = arr.slice(arr.length - k);

  console.log(forward.join(" "));
  console.log(backwards.join(" "));
}
demo([2, 7, 8, 9]);
demo([3, 6, 7, 8, 9]);
