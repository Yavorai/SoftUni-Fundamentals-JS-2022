function demo(a,b,c) {
    let nums = []
    nums.push(a,b,c)
    nums.sort((a,b) => b - a)
    for(let i = 0; i < nums.length;i++){
        console.log(nums[i]);
    }
}
demo(-2, 1, 3);
console.log("==============");
demo(2, 1, 3);
