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

console.log(newBook)


// }
//add to library
const form  = document.getElementById("form")

button.addEventListener("click",()=>{
form.style.visibility = "visible";
})
//delete

function addToLibrary( ){
const readBtn=document.createElement("button");
const readTxt = document.createTextNode("read")
const div2 = document.createElement("div")
const deleteButton = document.createElement("button");

let read = document.getElementById("read").value;
let readNode = document.createElement("h6");
readBtn.addEventListener("click",()=>{
  if(read==="on"){
    readNode.innerHTML ="no read";
    read="noread";}
  else{
    readNode.innerHTML ="read";
    read="on"
  }})
div2.innerHTML += "<p class='b'>" + newBook2.author +"</p>" + "<p class='b'>" + newBook2.title +"</p>" + "Pages:"+ newBook2.pages;
div2.appendChild(readNode)
deleteButton.setAttribute('style', 'width: 50px; height: 25px;');
deleteButton.addEventListener("click",()=>{
div2.remove();
deleteButton.remove();
})
let text = document.createTextNode("Delete");
 deleteButton.appendChild(text);
 readBtn.appendChild(readTxt)
 div2.setAttribute("id","box")
 div2.appendChild(readBtn)
div2.appendChild(deleteButton)


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






 

 