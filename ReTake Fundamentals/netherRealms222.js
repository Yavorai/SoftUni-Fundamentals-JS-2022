function netherRealms(text) {
 
    let demons = text.split(/,\s*/).sort((a, b) => a.localeCompare(b));
 
    for (let demon of demons) {
        if (demon.includes(' ')==false) {
            console.log(`${demon} - ${health(demon)} health, ${damage(demon)} damage`);
        }
    }
    //calculate demon health
    function health(string) {
        let pattern = /[0-9+\-*,\/.]*/g;
        let result = string.replace(pattern, '')
            .split('')
            .map(x => x.charCodeAt(0));
        if (result.length > 0) {
            result = result.reduce((a, b) => a + b);
            return result;
        }
    }
    //calculate demon damage
    function damage(string) {
        let pattern = /\-?[0-9\.]+/gm;
        let simbols = /[0-9]([*\/]+)/g
        let numbers = string.match(pattern);
        let result = 0;
        if (numbers != null) {
            result = numbers.map(Number).reduce((a, b) => a + b);
        }

        
        let match = simbols.exec(string);
        while (match != null) {
            let elements = match[1].split('');
            for (let action of elements) {
                if (action == '*') {
                    result *= 2;
                } else {
                    result /= 2;
                }
            }
            match = simbols.exec(string);
        }
        return result.toFixed(2);
    }
}
netherRealms(`M3ph-0.5s-0.5t0.0**`);
netherRealms(`M3ph1st0**, Azazel, ] fgfg`);
netherRealms(`Gos/ho`);