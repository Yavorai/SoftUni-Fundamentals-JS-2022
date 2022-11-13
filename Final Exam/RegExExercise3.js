function demo(input) {
  // ако не се ползват групи - MATCH
  // ако се групира - EXEC

  let totalIncome = 0
  for(let order of input){
      let match = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*.*\|(?<quantity>[\d]+)\|[^|$%.\d]*[^\d]*(?<price>[\d]+\.?[\d]*)\$/g.exec(order)

      if(match){
          let totalPrice = Number(match.groups.price) * Number(match.groups.quantity)
          totalIncome += totalPrice
          console.log(`${match.groups.customer}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
      }
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
demo([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
console.log("======================");

demo([
    "%InvalidName%<Croissant>|2|10.3$",
"%Peter%<Gum>1.3$",
"%Maria%<Cola>|1|2.4",
"%Valid%<Valid>valid|10|valid20$",
"end of shift"
])
