function demo(first, second, age) {
  let obj = {
      sayHi: function(){
          console.log("Hi");
      }
  };
  obj.firstName = first
  obj.sayHi()
  
}
demo("Peter", "Pan", "20");