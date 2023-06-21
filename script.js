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
const div = document.getElementById("table")
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
  author = document.getElementById("author").value
  title  = document.getElementById("title").value
  pages = document.getElementById("pages").value
  read = document.getElementById("read").value
  const div2 = document.createElement("div");
  for (let i = 0; i < bookArray.length; i++) {
    const element = bookArray[i];
    console.log(element)
   
  }
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click",()=>{
    
  div2.remove();
  deleteButton.remove();
  })
  div.appendChild(deleteButton)
  div2.innerHTML += [author,title,pages,read]
  div2.setAttribute("id","divj")
  div.appendChild(div2)
}
const form  = document.getElementById("form")
form.addEventListener("submit",(e)=>{
  e.preventDefault();
 
  const bookArray2 = [author,title,pages,read]
  bookArray = bookArray2
  console.log(bookArray)
  form.style.visibility = "hidden";
  addToLibrary();
  author = document.getElementById("author").value = "";
  title  = document.getElementById("title").value = " ";
  pages = document.getElementById("pages").value = " ";
  read = document.getElementById("read").value= " ";

 }); 

  

  
  
  
