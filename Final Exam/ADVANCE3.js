function equalNeighbors(input) {

    const result = input.reduce((acc, arrLine, arrLineItem) => {
      const counter = arrLine.reduce((acc, lineItem, arrLineIndex) => {
        if (lineItem === arrLine[arrLineIndex + 1]) {
          acc += 1;
        }
        if (lineItem === (input[arrLineItem + 1] || [])[arrLineIndex]) {
          acc += 1;
        }
        return acc;
      }, 0);
      return acc + counter;
    }, 0);
    return result;
  }
  // -=-=-=-=-=-=-=-=-=-=-SecondResolution-=-=-=-=-=-=-=-=-=-=-
  /*
  function equal(input) {
    let neighbors = 0;
    for (let i = 0; i < input.length; i++) {
      const currentLine = input[i];
      for (let k = 0; k < currentLine.length; k++) {
        const currentItem = currentLine[k];
        currentItem === currentLine[k + 1] ? (neighbors += 1) : neighbors;
        currentItem === (input[i + 1] || [])[k] ? (neighbors += 1) : neighbors;
      }
      // console.log(currentLine[i]);
    }
    return neighbors;
  }
  */