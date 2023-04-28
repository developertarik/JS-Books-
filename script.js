let bookArray =["Hobbit","Harry Potter","Silmarillion"];

// function Book(author,title,number,read){
//     this.author = author;
//     this.title = title;
//     this.number = number;
//     this.read = read;
 
// }

function addToLibrary(){
    const button = document.getElementById(".button");
    button.addEventListener(click,()=>{
        alert("?")
    })
    document.appendChild(button)

}
addToLibrary()

for (let i = 0; i < bookArray.length; i++) {
    const element = bookArray[i];
    console.log(element)
 }
