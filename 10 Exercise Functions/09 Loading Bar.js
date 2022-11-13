// function loadingBar(n){
//     let load = n / 10;
//     let str =["["];
//     for (let i = 0; i < 10;i++) {
//       if (i < load) {
//         str.push("%");
//       } else {
//         str.push(".")
//       }
//     }
//     str.push("]");
//     if (load == 10) {
//       return `100% Complete!` + "\n" + str.join("");
//     } else {
//       return `${n}% ` + str.join("") + "\n" + `Still loading...`
//     }
//   }
//   console.log(loadingBar(30));
//   console.log(loadingBar(50));
//   console.log(loadingBar(100));
  //======================
  function loadingBar(num) {
    let percent = num / 10;
    let loader = ['.','.','.','.','.','.','.','.','.','.'];

    function complete(num) {
        let result = [];
        result.push('100% Complete!');
        result.push('[%%%%%%%%%%]');
        return result.join('\n');
    }

    for (let i = 0; i < percent; i++) {
        loader.pop();
        loader.unshift('%');
    }

    if (num === 100) {
        console.log(complete(num));
    } else {
        console.log(`${num}% [${loader.join('')}]`);
        console.log('Still loading...');
    }
}
loadingBar(30);