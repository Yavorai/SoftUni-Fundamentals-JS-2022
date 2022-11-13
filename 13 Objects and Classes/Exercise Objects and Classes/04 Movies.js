function demo(cinemaList){
    let movieInfo = []

    for(let commands of cinemaList){
        let command = commands.split(" ")

        if(command.includes("addMovie")){
            command.shift()
            let movieName = command.join(" ")
            movieInfo.push({
                name: movieName
            })
        }else if (command.includes("directedBy")){
            
            let index = command.findIndex(x => x === "directedBy")
            let movieName = command.slice(0,index).join(" ")
            let director = command.slice(index + 1).join(" ")
            let exist = movieInfo.findIndex(x => x.name === movieName)
            
            if(exist > -1){
                movieInfo[exist].director = director
            }
        }else if(command.includes("onDate")){
            let date = command.pop()
            command.pop()
            let movieName = command.join(" ")
            let exist = movieInfo.findIndex(x => x.name === movieName)

            if(exist > - 1){
                movieInfo[exist].date = date
            }
        }
    }
    for(let movies of movieInfo){
        if(movies.name && movies.director && movies.date){
            console.log(JSON.stringify(movies));
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

    //==================================

    function movies(input = []) {
        let collection = [];
        for (const line of input) {
            let movieName = '';
            if (line.includes('addMovie')) {
                movieName = line.split('addMovie ')[1];
                collection = addMovie(movieName, collection);
            } else if (line.includes('directedBy')) {
                let values = line.split(' directedBy ');
                movieName = values[0];
                let director = values[1];
    
                if (checkMovie(movieName, collection)) {
                    collection = addDirector(movieName, director, collection);
                }
            } else if (line.includes('onDate')) {
                let values = line.split(' onDate ');
                movieName = values[0];
                let date = values[1];
    
                if (checkMovie(movieName, collection)) {
                    collection = addDate(movieName, date, collection);
                }
            }
        }
    
        return print(collection);
    
        function addDate(movieName, date, arr) {
            for (const currObj of arr) {
                if (currObj.name === movieName) {
                    currObj.date = date;
                }
            }
            return arr;
        }
    
        function addDirector(movieName, director, arr) {
            for (const currObj of arr) {
                if (currObj.name === movieName) {
                    currObj.director = director;
                }
            }
            return arr;
        }
    
        function checkMovie(movieName, arr) {
            for (const currObj of arr) {
                if (currObj.name === movieName) {
                    return true;
                }
            }
            return false;
        }
    
        function addMovie(name, arr) {
            arr.push({
                name: name
            });
            return arr;
        }
    
        function print(arr = []) {
            let output = [];
            
            for (const currObj of arr) {
                let keys = Object.keys(currObj);
                if (keys.length === 3) {
                    output.push(JSON.stringify(currObj));
                }
            }
            return output.join('\n');
        }
    }
    
    // console.log(movies(
    //     [
    //         'addMovie Fast and Furious',
    //         'addMovie Godfather',
    //         'Inception directedBy Christopher Nolan',
    //         'Godfather directedBy Francis Ford Coppola',
    //         'Godfather onDate 29.07.2018',
    //         'Fast and Furious onDate 30.07.2018',
    //         'Batman onDate 01.08.2018',
    //         'Fast and Furious directedBy Rob Cohen'
    //     ]
    // ));

    //=========================================

    function movies(array) {
        let movies =[];
        for (let line of array) {
          if (line.includes("addMovie") ) {
            let newMovie={};
            let name = line.substring(9);
            newMovie.name = name;
            movies.push(newMovie);
          } else if (line.includes("directedBy")){
      
            let [name, director] = line.split(" directedBy ");
            
            movies.forEach(m => {
              if (m.name == name){
                m.director = director;
              }
            })
          } else if (line.includes("onDate")){
      
            let [name, date] = line.split(" onDate ");
      
            movies.forEach(m => {
              if (m.name == name) {
                m.date = date;
              }
            })
          }
        }
      
        movies.forEach(m => {
          if (m.name && m.date && m.director) {
            console.log(JSON.stringify(m));
          }
        })
      }
      movies([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
      ])