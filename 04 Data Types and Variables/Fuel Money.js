function demo(dist,people,price){
    let consumption = 7 + (people * 0.1)
    let fuel = (dist / 100) * consumption
    const total = fuel * price
    console.log(`Needed money for that trip is ${total} lv`);
}
demo(260, 9, 2.49)
demo(90, 14, 2.88)