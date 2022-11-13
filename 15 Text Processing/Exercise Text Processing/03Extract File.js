function demo(path){

    // find last element of path splited by \\
    // split last element in two at final period

    let tokens = path.split("\\")
    let filename = tokens.pop()
    let index = filename.lastIndexOf(".")

    let name = filename.substring(0,index)
    let ext = filename.substring(index + 1)

    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}
demo('C:\\Internal\\training-internal\\Template.pptx')
demo('C:\\Projects\\Data-Structures\\LinkedList.cs'
)