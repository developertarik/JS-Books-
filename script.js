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
const div = document.getElementById("container")
 const checkbox = document.getElementById("checkbox")

// }
//add to library
button.addEventListener("click",()=>{
  form.style.visibility = "visible";
})

function addToLibrary(){
  author = document.getElementById("author").value
  title  = document.getElementById("title").value
  pages = document.getElementById("pages").value
  const div2 = document.createElement("div");

  
  const deleteButton = document.createElement("button");
  const readButton= document.createElement("button");
  deleteButton.addEventListener("click",()=>{
  deleteButton.innerText = "Button is delete";
  div2.remove();
  deleteButton.remove();
  })
  if(checkbox.checked){
    div2.innerHTML +="read";
}
else{
  div2.innerHTML +="not read!";
}
  div2.innerHTML += [author,title,pages]
  let text = document.createTextNode("Delete");
   deleteButton.appendChild(text);
   div2.appendChild(readButton)
  deleteButton.setAttribute('style', 'width: 50px; height: 25px;');
  
  div2.setAttribute("id","box")
  div2.appendChild(deleteButton)
  

  div.appendChild(div2)
}
 const form  = document.getElementById("form")
form.addEventListener("submit",(e)=>{
  e.preventDefault();
 
  const bookArray2 = [author,title,pages]
  bookArray = bookArray2
  console.log(bookArray)
  form.style.visibility = "hidden";
  addToLibrary();
  author = document.getElementById("author").value = "";
  title  = document.getElementById("title").value = " ";
  pages = document.getElementById("pages").value = " ";


 }); 

  
  