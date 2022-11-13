function demo(band,album,song){
    let duration = band.length * album.length * song.length / 2
    let rotations = Math.ceil(duration / 2.5)// това отпада за вар 2


    //или
    // let rotations = 0
    // while (duration > 0){
    //     rotations++
    //     duration -= 2.5
    // }
    console.log(`The plate was rotated ${rotations} times.`);
}
demo('Black Sabbath', 'Paranoid', 'War Pigs')