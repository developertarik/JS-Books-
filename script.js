let bookArray =["hobbit 399 read","silmarillion 299 read","create 0 0 read"];

  function Book(author,title,pages,read){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
   
  }

  
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
button.addEventListener("click",()=>{
  form.style.visibility = "visible";
})

function addToLibrary(){
   const div2 = document.createElement("div");
   
  
  

    
}
const form  = document.getElementById("form")
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  author = document.getElementById("author").value
  title  = document.getElementById("title").value
  pages = document.getElementById("pages").value
  read = document.getElementById("read").value
  const bookArray2 = [author,title,pages,read]
  console.log(bookArray2)
  form.style.visibility = "hidden";
  author = "";

  

 }); 

  

  
  
  
