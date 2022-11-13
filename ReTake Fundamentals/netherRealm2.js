function netherReal(input) {
  let patternSplit = /[, ]+/g;
  let splitedArr = input.split(patternSplit);
  let patternForHealth = /[^\d+\-*/\.]/;
  let patternForDamage = /([+|-]?\d+(?:\.\d+)?)/g;

  let resultObj = {};

  for (let demon of splitedArr) {
    let charSpliting = demon.split("");
    let letters = charSpliting.filter((x) => patternForHealth.exec(x));
    let asciiArr = [];
    letters.forEach((el) => {
      el = el.charCodeAt();
      asciiArr.push(el);
    });
    let health = asciiArr.reduce((x, y) => x + y);

    let numbers = demon.match(patternForDamage);
    let damage = 0;
    if (numbers != null) {
      let numbersSum = numbers.map(Number).reduce((x, y) => x + y);
      let multOrDiciding = charSpliting.forEach((x) => {
        if (x === "*") {
          numbersSum *= 2;
        } else if (x === "/") {
          numbersSum /= 2;
        }
      });
      damage = numbersSum;
    } else {
      damage = 0;
    }
    resultObj[demon] = [health, damage];
  }
  let result = Object.entries(resultObj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let info of result) {
    let name = info[0];
    let health = info[1][0];
    let damage = info[1][1];
    console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
  }
  function netherReal(input) {
    let patternSplit = /[, ]+/g;
    let splitedArr = input.split(patternSplit);
    let patternForHealth = /[^\d+\-*/\.]/;
    let patternForDamage = /([+|-]?\d+(?:\.\d+)?)/g;

    let resultObj = {};

    for (let demon of splitedArr) {
      let charSpliting = demon.split("");
      let letters = charSpliting.filter((x) => patternForHealth.exec(x));
      let asciiArr = [];
      letters.forEach((el) => {
        el = el.charCodeAt();
        asciiArr.push(el);
      });
      let health = asciiArr.reduce((x, y) => x + y);

      let numbers = demon.match(patternForDamage);
      let damage = 0;
      if (numbers != null) {
        let numbersSum = numbers.map(Number).reduce((x, y) => x + y);
        let multOrDiciding = charSpliting.forEach((x) => {
          if (x === "*") {
            numbersSum *= 2;
          } else if (x === "/") {
            numbersSum /= 2;
          }
        });
        damage = numbersSum;
      } else {
        damage = 0;
      }
      resultObj[demon] = [health, damage];
    }
    let result = Object.entries(resultObj).sort((a, b) =>
      a[0].localeCompare(b[0])
    );

    for (let info of result) {
      let name = info[0];
      let health = info[1][0];
      let damage = info[1][1];
      console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
    }
    function netherReal(input) {
      let patternSplit = /[, ]+/g;
      let splitedArr = input.split(patternSplit);
      let patternForHealth = /[^\d+\-*/\.]/;
      let patternForDamage = /([+|-]?\d+(?:\.\d+)?)/g;

      let resultObj = {};

      for (let demon of splitedArr) {
        let charSpliting = demon.split("");
        let letters = charSpliting.filter((x) => patternForHealth.exec(x));
        let asciiArr = [];
        letters.forEach((el) => {
          el = el.charCodeAt();
          asciiArr.push(el);
        });
        let health = asciiArr.reduce((x, y) => x + y);

        let numbers = demon.match(patternForDamage);
        let damage = 0;
        if (numbers != null) {
          let numbersSum = numbers.map(Number).reduce((x, y) => x + y);
          let multOrDiciding = charSpliting.forEach((x) => {
            if (x === "*") {
              numbersSum *= 2;
            } else if (x === "/") {
              numbersSum /= 2;
            }
          });
          damage = numbersSum;
        } else {
          damage = 0;
        }
        resultObj[demon] = [health, damage];
      }
      let result = Object.entries(resultObj).sort((a, b) =>
        a[0].localeCompare(b[0])
      );

      for (let info of result) {
        let name = info[0];
        let health = info[1][0];
        let damage = info[1][1];
        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
      }
    }
  }
}
netherReal("M3ph-0.5s-0.5t0.0**");
console.log("------------------------");
netherReal("M3ph1st0**, Azazel");
console.log("------------------------");
netherReal("Gos/ho");
