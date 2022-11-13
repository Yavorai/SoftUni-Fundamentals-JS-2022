function netherRealms(input) {
    let arr = input.split(',').map(x => x.trim());
    let demons = arr.sort((a, b) => a.localeCompare(b));
    let healthPattern = /[^0-9+\-*/\.]/g
    let damagePattern = /-?\d+\.?\d*/g
    let alterPattern = /[\/\*]/g; 
    for (let demon of demons) {
        let health = 0
        let damage = 0;
        let letters = demon.match(healthPattern).join('');
        if (letters.length > 0) {
            for (let letter of letters) {
                health += letter.charCodeAt(0);
            }
        } else {
            health = 0;
        }
        let numbers = demon.match(damagePattern);
        if (numbers !== null) {
            damage = numbers.map(Number).reduce((a, b) => a + b, 0);
            let alter = demon.match(alterPattern);
            if (alter !== null) {
                for (item of alter) {
                    if (item === '/') {
                        damage /= 2;
                    } else {
                        damage *= 2;
                    }
                }
            }
        } else {
            damage = 0;
        }
        console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage `);
    }
}
netherRealms("M3ph-0.5s-0.5t0.0**")
netherRealms("M3ph1st0**, Azazel")
netherRealms("Gos/ho")