// let bookArray = [Book]
function Book(author,title,pages,read){
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
 
}
const newBook= undefined;
let newBook2;
//buttons
const button = document.getElementById("button")
const submit = document.getElementById("submit")
const div = document.getElementById("container")
const readBtn = document.createElement("input")
readBtn.setAttribute("type","checkbox")
console.log(newBook)


// }
//add to library
const form  = document.getElementById("form")

button.addEventListener("click",()=>{
form.style.visibility = "visible";
})
//delete

function addToLibrary(){
const div2 = document.createElement("div")
const deleteButton = document.createElement("button");
div2.innerHTML += newBook2.author + newBook2.title + newBook2.pages + newBook2.read;

 

deleteButton.setAttribute('style', 'width: 50px; height: 25px;');
deleteButton.addEventListener("click",()=>{
div2.remove();
deleteButton.remove();
})
let makeButton = document.createElement('button');
makeButton.innerHTML = "Update";
makeButton.onclick = () => {
  if(newBook2.read ==="on"){
    newBook2.read = "not read";
     div2.innerHTML +=newBook2.read;
  }
  else{
    newBook2.read = "read";
    div2.innerHTML += newBook2.read;
  }

}
let text = document.createTextNode("Delete");
 deleteButton.appendChild(text);
div2.setAttribute("id","box")
div2.appendChild(deleteButton)
div2.appendChild(makeButton)


div.appendChild(div2)
}


//delete

form.addEventListener("submit",(e)=>{
e.preventDefault();
author = document.getElementById("author").value
title = document.getElementById("title").value
pages = document.getElementById("pages").value
read = document.getElementById("read").value
newBook2 = new Book(author,title,pages,read)
console.log(newBook2.author)
form.style.visibility = "hidden";
addToLibrary();

author = document.getElementById("author").value = ""
title = document.getElementById("title").value = ""
pages = document.getElementById("pages").value = ""
read = document.getElementById("read").value = ""

}); 