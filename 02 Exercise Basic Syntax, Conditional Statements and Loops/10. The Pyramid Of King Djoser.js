// function thePyramid(base, increment) {
//     let stone = 0;
//     let marbel = 0;
//     let lapis = 0;
//     let gold = 0;
//     let count = 0;
//     for (let i = base; i >= 1; i -= 2) {
//         count++
//         if (i === 1 || i === 2) {
//             gold += i * i;
//         } else if (count % 5 !== 0) {
//             marbel += i * 4 - 4;
//             stone += (i - 2) * (i - 2)
//         } else {
//             lapis += i * 4 - 4;
//             stone += (i - 2) * (i - 2)
//         }
//     }
//     console.log(`Stone required: ${Math.ceil(stone * increment)}`);
//     console.log(`Marble required: ${Math.ceil(marbel * increment)}`);
//     console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
//     console.log(`Gold required: ${Math.ceil(gold * increment)}`);
//     console.log(`Final pyramid height: ${Math.floor(count * increment)}`);
// }
// thePyramid(23, 0.5);

// //===========================================

// function thePyramidOfKingDjoser(input1, input2){
//     let widthLength = Number(input1);
//     let heigth = Number(input2);
//     let stoneBlocks = 0;
//     let marbleBlocks = 0;
//     let lapisBlocks = 0;
//     let goldBlocks = 0;
//     let stepCounter = 0;
//     let totalHeigth = 0;

//     while(widthLength > 0){
//         totalHeigth += heigth;
//         stepCounter++;
//         let totalCurrentBlocks = widthLength * widthLength * heigth;
//         let innerBlocks = (widthLength - 2) * (widthLength - 2) * heigth;
//         let outsideBlocks = totalCurrentBlocks - innerBlocks;
//         if(widthLength < 3){
//             goldBlocks += totalCurrentBlocks;
//         } else{
//             stoneBlocks += innerBlocks;
//             if (stepCounter % 5 !== 0) {
//                 marbleBlocks += outsideBlocks;
//             } else {
//                 lapisBlocks += outsideBlocks;
//             }
//         }
//         widthLength -= 2;
//     }

//     console.log(`Stone required: ${Math.ceil(stoneBlocks)}`);
//     console.log(`Marble required: ${Math.ceil(marbleBlocks)}`);
//     console.log(`Lapis Lazuli required: ${Math.ceil(lapisBlocks)}`);
//     console.log(`Gold required: ${Math.ceil(goldBlocks)}`);
//     console.log(`Final pyramid height: ${Math.floor(totalHeigth)}`);
// }

//=============================================

function thePyramid(base, increment) {
    let stone = 0;
    let marbel = 0;
    let lapis = 0;
    let gold = 0;
    let count = 0;

    for(let i = base; i>= 1; i-=2){
        count++
        if(i === 1 || i ===2){
            gold += i * i
        }else if( count % 5 !== 0){
            marbel += i * 4 - 4
            stone += (i-2) * (i-2)
        }else{
            lapis += i*4-4
            stone += (i-2) * (i-2)
        }
    }

  console.log(`Stone required: ${Math.ceil(stone * increment)}`);
  console.log(`Marble required: ${Math.ceil(marbel * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(count * increment)}`);
}
thePyramid(23, 0.5);
console.log("--------------------");
thePyramid(11, 0.75);
console.log("--------------------");
thePyramid(12, 1);


//===============================

function thePyramidOfKingDjoser(input1, input2){
    let widthLength = Number(input1);
    let heigth = Number(input2);
    let stoneBlocks = 0;
    let marbleBlocks = 0; 
    let lapisBlocks = 0;
    let goldBlocks = 0;
    let stepCounter = 0;
    let totalHeigth = 0;
 
    while(widthLength > 0){
        totalHeigth += heigth;
        stepCounter++;
        let totalCurrentBlocks = widthLength * widthLength * heigth;
        let innerBlocks = (widthLength - 2) * (widthLength - 2) * heigth;
        let outsideBlocks = totalCurrentBlocks - innerBlocks;
        if(widthLength < 3){
            goldBlocks += totalCurrentBlocks;
        } else{
            stoneBlocks += innerBlocks;
            if (stepCounter % 5 !== 0) {
                marbleBlocks += outsideBlocks;
            } else {
                lapisBlocks += outsideBlocks;
            }
        }
        widthLength -= 2;
    }
 
    console.log(`Stone required: ${Math.ceil(stoneBlocks)}`);
    console.log(`Marble required: ${Math.ceil(marbleBlocks)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisBlocks)}`);
    console.log(`Gold required: ${Math.ceil(goldBlocks)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeigth)}`);
}

//===================================
function pyramid(num1,num2){
    let base = num1;
    let height = num2;
    let square = 0;
    let marbleSquare = 0;
    let stoneSquare = 0;
    let stoneNeeded = 0;
    let marbleNeeded = 0;
    let counter = 0;
    let lepizSquare = 0;
    let lepizNeeded = 0;
    let goldNeeded = 0;
    let steps = 0;
    
    for (let a = base; a >= 0; a--){
        if (a == 2 || a == 1){
            if(a == 1){
                square = a * a;
                goldNeeded = square * height;
                steps++;
                break;
            }
            else{
                square = a * a;
                goldNeeded = square * height;
                steps++;
                break;
            }
        }
        else if (counter == 4){
            counter = 0;
            square = a * a;
            lepizSquare = (a * 4) - 4;
            stoneSquare = square - lepizSquare;
            stoneNeeded += stoneSquare * height;
            lepizNeeded += lepizSquare * height;
            steps++;
            a--;
        }
        else{
        square = a * a;
        marbleSquare = (a * 4) - 4;
        stoneSquare = square - marbleSquare;
        stoneNeeded += stoneSquare * height;
        marbleNeeded += marbleSquare * height;
        counter++;
        steps++;
        a--;
        }
    }
    console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lepizNeeded)}`);
    console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * height)}`);
}
pyramid(11,1)
pyramid(11,0.75)