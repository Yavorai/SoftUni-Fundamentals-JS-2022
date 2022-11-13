function demo(input){
  let destinations = {}

  for(let line of input){
      let[country,town,cost] = line.split(" > ");
      cost = Number(cost)
      if(!Object.keys(destinations).includes(country)){
        destinations[country] = {}
      }

      if(!Object.keys(destinations[country]).includes(town)){
        destinations[country][town] = cost
      }

      if(cost < destinations[country][town]){
        destinations[country][town] = cost
      }
  }
/*
[
  [ 'Bulgaria', { Sofia: 200, Sopot: 800 } ],
  [ 'France', { Paris: 2000 } ],
  [ 'Albania', { Tirana: 1000 } ]
]
*/ 
  let sortedCountries = Object.entries(destinations)
  let insideObj = Object.values(sortedCountries[0][1])
  sortedCountries.sort((a,b) => a[0].localeCompare(b[0]) || insideObj.reduce((x,y) => x+y))
   
  for(let [country,town] of sortedCountries){
      let asArr = Object.entries(town)
      
      console.log(`${country} -> ${asArr[0]} -> ${asArr[1]}`)
  }
}
demo([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ])