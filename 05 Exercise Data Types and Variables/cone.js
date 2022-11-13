function demo(radius, height) {
  let volume = ((1 / 3) * Math.PI * Math.pow(radius, 2) * height).toFixed(4);
  console.log(`volume = ${volume}`);
  let slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
  let base = Math.PI * Math.pow(radius, 2);
  let areaAround = Math.PI * radius * slantHeight;
  let area = (base + areaAround).toFixed(4);
  console.log(`area = ${area}`);
}
demo(3, 5);
demo(3.3, 7.8);

//================================================
function cone(radius, height) {
  let formulaVol = ((1 / 3) * Math.PI * Math.pow(radius, 2) * height).toFixed(4);
  let formulaArea = (
    Math.PI *
    radius *
    (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)))
  ).toFixed(4);

  console.log(`volume = ${formulaVol}`);
  console.log(`area = ${formulaArea}`);
}
demo(3, 5);
demo(3.3, 7.8);
