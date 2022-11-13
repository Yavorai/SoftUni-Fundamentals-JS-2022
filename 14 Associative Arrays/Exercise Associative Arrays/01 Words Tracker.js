function demo(input){
        let wordsToSearch = input.shift().split(" ")
        let words = {}
        for(let word of wordsToSearch){
            words[word] = 0
        }
        for(let word of input){
            if(Object.keys(words).includes(word)){
                words[word] += 1
            }
        }
        let sorted = Object.entries(words).sort((a,b) => b[1] - a[1])
        for(let [key,value] of sorted){
            console.log(`${key} - ${value}`);
        }
}
demo([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ])

//===========================================

    function solve(array) {
        let wordsToFind = array.shift().split(' ');
        let occurrences = {};
        for (let word of wordsToFind) {
          let counter = 0;
          for (let current of array) {
            if (word === current) {
              counter++;
              occurrences[word] = counter;
            } else {
              occurrences[word] = counter;
            }
          }
        }
       
        let entries = Object.entries(occurrences);
        entries.sort((a, b) => Number(b[1]) - Number(a[1]));
       
        for ([key, value] of entries) {
          console.log(`${key} - ${value}`);
        }
      }
//===========================================
      function demo(input) {
        let wordsToSearch = input.shift().split(" ");
        let myWords = {};
        for (let elements of wordsToSearch) {
            myWords[elements] = 0;
            // прави това {this: 0, sentence: 0}
        }
        for (let word of input) {
            // console.log(word);
            if (myWords.hasOwnProperty(word)) {
                myWords[word] += 1;
                // {this: 3, sentence: 2}
            }
        }
        let sortedEntries = Object.entries(myWords).sort((a, b) => {
            return b[1] - a[1];
        });
        sortedEntries.forEach((el) => {
            console.log(`${el[0]} - ${el[1]}`);
        });
    }