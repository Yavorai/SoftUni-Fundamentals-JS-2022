let contacts = {}
contacts["bill"] = {
    phone: "3333333445",
    address: "AAAAA",
}
contacts["toi"] = {
    phone: "3111111145",
    address: "BBBBB",
}
contacts["tq"] = {
    phone: "3111111145",
    address: "ACCCC",
}
contacts["ancho"] = {
        phone: "3111111145",
        address: "ACCCC",
    }
    //console.log(contacts["bill"].phone);
let entries = Object.entries(contacts)

let sorted = entries.sort(([nameA, itsValueObjA], [nameB, itsValueObjB]) => {
    let addressForExampleA = itsValueObjA.address
    let addressForExampleB = itsValueObjB.address
    return addressForExampleA.localeCompare(addressForExampleB) || nameA.localeCompare(nameB)
})
for (let name of sorted) {
    console.log(name[0]);
    let some = Object.entries(name[1])
    for (let [key, value] of some) {
        console.log(`--- ${key} -> ${value}`);
    }
}