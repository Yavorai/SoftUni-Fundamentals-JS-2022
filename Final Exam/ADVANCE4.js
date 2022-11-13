function solve(input) {
    let pairs = 0;
   
    for (let i = 0; i < input.length; i++) {
      let currentLine = input[i];
      if ((i == input.length - 1)) {
        break;
      }
      for (let j = 0; j < currentLine.length; j++) {
        let firstLineElement = currentLine[j];
        let nextLineIndex = i + 1;
        let nextLine = input[nextLineIndex];
        let secondLineElement = nextLine[j];
        if (firstLineElement === secondLineElement) {
          pairs++;
        }
      }
    }
    return pairs
  }
  solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
  ]);
  solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5'],
  ]);