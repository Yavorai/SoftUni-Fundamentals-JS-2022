function solve2(params) {
    let systems = new Map();

    for(const row of params) {
        let [name, component, subComponent] = row.split(" | ")
        if(!systems.has(name)){
            systems.set(name, new Map());
        }
        let setOfSubComponents = systems.get(name).get(component);
        if(!setOfSubComponents){
            systems.get(name).set(component,[])
            setOfSubComponents = systems.get(name).get(component)
        }
        setOfSubComponents.push(subComponent)
    }
    let ident = "|||"
    let sortSystems = (a,b) => b[1].size - a[1].size !== 0 ? b[1].size - a[1].size : a[0] < b[0] ? -1
}
solve2([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])