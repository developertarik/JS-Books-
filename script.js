let bookArray =["Hobbit","Harry Potter","Silmarillion"];

  function Book(author,title,number,read){
      this.author = author;
      this.title = title;
     this.number = number;
     this.read = read;
 
  }
  const button = document.getElementById(".button");
// function addToLibrary(author,title,number,read){
    
//     button.addEventListener(click,()=>{
//        author = prompt("How is author?")
//        title = prompt("how is title")
//        number = prompt("how many pages?")
//        read = prompt("read or not read")
//     })
//     document.appendChild(button)

// }
// addToLibrary()
let analog  = document.getElementById("analog")
for (let i = 0; i < bookArray.length; ++i) {
    let td  = document.createElement("td");
    td.innerText = bookArray[i];
     analog.appendChild(td)
    }
    // for (i = 0; i < data.length; ++i) {
    //     var li = document.createElement('li');
    //     li.innerText = data[i];
    //     list.appendChild(li);