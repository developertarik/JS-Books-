let bookArray =["hobbit 399 read","silmarillion 299 read","create 0 0 read"];

  function Book(author,title,pages,read){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
   
  }

  
 Book();
//buttons
const button = document.getElementById("button")
const submit = document.getElementById("submit")
const table = document.getElementById("table")
// // function viewToLibrary(){
// //   for (let i = 0; i< bookArray.length; i++) {
// //     let td = document.createElement("td");
// //     td.innerText = bookArray[i];
// //     table.appendChild(td)
// // }


// }
//add to library
function addToLibrary(){
  author = document.getElementById("author").value
  title  = document.getElementById("title").value
  pages = document.getElementById("pages").value
  read = document.getElementById("read").value
  console.log(author,title,pages,read)
}

addToLibrary()
 

  

  
  
  
