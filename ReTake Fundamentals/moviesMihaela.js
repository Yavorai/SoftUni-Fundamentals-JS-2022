function demo(input) {
    let films = []

    while (input.length > 0) {
        let line = input.shift()
        let tokens = line.split(" ")
        if (tokens.includes("addMovie")) {
            tokens.shift() // не ни трябва
            let movieName = tokens.join(" ")
            let movie = { name: movieName }
            films.push(movie)
        } else if (tokens.includes("directedBy")) {
            let index = tokens.indexOf("directedBy")
            let name = tokens.slice(0, index).join(" ")
            let director = tokens.slice(index + 1, tokens.length).join(" ")

            for (let film of films) {
                if (film.name === name) {
                    film.director = director
                }
            }
        } else if (tokens.includes("onDate")) {
            let index = tokens.indexOf("onDate")
            let name = tokens.slice(0, index).join(" ")
            let date = tokens.slice(index + 1).toString()

            for (let film of films) {
                if (film.name === name) {
                    film.date = date // [0]      или с нула ??? 
                }
            }
        }
    }
    for (let film of films) {
        if (film.name && film.date && film.director) {
            console.log(JSON.stringify(film));
        }
    }

}
demo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])