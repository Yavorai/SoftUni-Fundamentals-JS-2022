function demo(workersList){
    for(let worker of workersList){
        let obj = {
            name: worker,
            personalNumber: worker.length
        }
        console.log(`Name: ${obj["name"]} -> Number: ${obj["personalNumber"]}`);
    }
}
demo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])

    //==============================

    function demo(arr){
        arr.forEach(el => {
            let obj = {
                name: el,
                personalInfo: el.length,

            }
            console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalInfo}`);
        })
    }
    demo([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
        ])