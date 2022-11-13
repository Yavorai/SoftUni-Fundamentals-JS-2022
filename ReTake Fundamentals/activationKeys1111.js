function demo(input){
{
    /*
    actions:
    -- contains - check if the substring is present inside string
    -- flip - extract substring from start and end index performs operation and return to original place
    -- slice - extract substring from start to end index and remove
      for each line 
    -- parse command
    -- execute command
    print result
     */
}
// КАТО СЛОЖИМ ФУНКЦИИТЕ В ОБЕКТ ТРЯБВА ДА ИМ МАХНЕМ FUNCTION
let actions = {
    // съкратено на Contains: function(rawKey, pattern) и Contains(rawKey, pattern)  => {
        Contains(rawKey, pattern){ 
            if(rawKey.includes(pattern)){ // if(rawKey.indexOf(pattern) > 1){ 
                console.log(`${rawKey} contains ${pattern}`);
            }else{
                console.log("Substring not found!");
            }
        return rawKey;
    },
    Flip(rawKey, mode, start, end){
      [start, end] = [Number(start), Number(end)];
      let first = rawKey.substring(0, start);
      let second = rawKey.substring(start, end);
      let third = rawKey.substring(end)
      
      if(mode === "Upper"){
          second = second.toLocaleUpperCase() // РАБОТИ И С КИРИЛИЦА И ДРУГИ АЗБУКИ
        }else{
            second = second.toLocaleLowerCase()
        }
        let result = first + second + third
        console.log(result);
        return result
        
    },
    Slice(rawKey, start, end) {
        [start, end] = [Number(start), Number(end)];
        let first = rawKey.substring(0, start);
        let second = rawKey.substring(start, end);
        let third = rawKey.substring(end)
        
        let result = first + third
        console.log(result);
        return result
    },
}
let rawKey = input.shift()
let line;
    while( (line = input.shift()) !== "Generate"){
        let [actionName, ...params] = line.split(">>>") // всички останали елементи в един Нов масив params
        rawKey = actions[actionName](rawKey,...params) // в кръглите скоби подаваме параметрите
        // или
        // let action = actions[actionName]
        // rawKey = action(rawKey, ...params)
    }
    console.log(`Your activation key is: ${rawKey}`);
}
demo([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
  ])
  console.log("=============");
  demo([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ])