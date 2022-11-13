function demo(input) {

    let movieList = [] // по условие трябва да се пази в масив

    for (let command of input) {
        if (command.includes("addMovie")) {
            let [_, ...movieName] = command.split(" ")
            let movieNameAsString = movieName.join(" ")

            let movieObject = {
                name: movieNameAsString,
            }

            movieList.push(movieObject)

        } else if (command.includes("directedBy")) {

            let tokens = command.split(" ")
            let movieNameTokens = []
            let directorNameTokens = []
            let directedByIndex = tokens.findIndex(x => x === "directedBy");
            for (let i = 0; i < directedByIndex; i++) {
                movieNameTokens.push(tokens[i])

            }
            for (let i = directedByIndex + 1; i < tokens.length; i++) {
                directorNameTokens.push(tokens[i])

            }

            let name = movieNameTokens.join(" ")
            let director = directorNameTokens.join(" ")
            let movie = movieList.find(x => x.name === name) // връща цял обект ако го има
            if (movie) {
                movie.director = director
            }

        } else {

            let tokens = command.split(" ")
            let date = tokens.pop()
            tokens.pop() // маха onDate , командата
            let name = tokens.join(" ")
            let movie = movieList.find(x => x.name === name)
            if (movie) {
                movie.date = date
            }
        }
    }
    for (let movie of movieList) {
        if (movie.director && movie.date && movie.name) {
            console.log(JSON.stringify(movie));
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