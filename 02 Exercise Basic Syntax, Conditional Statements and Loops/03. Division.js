function demo(number) {
if(number % 10 === 0){
    console.log(`${number} ${"by 10"}`);
}else if(number % 7 === 0){
    console.log(`${number} ${"by 7"}`);

}else if(number %6 === 0){
    console.log(`${number} ${"by 6"}`);

}else if(number % 3 === 0){
    console.log(`${number} ${"by 3"}`);

}else if(number % 2=== 0){
    console.log(`${number} ${"by 2"}`);

}else{
    console.log("not")
}
}
demo(30);
demo(15);
demo(1643);
