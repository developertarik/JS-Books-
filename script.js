let bookArray =[];

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
const title = document.getElementById("title")
function viewToLibrary(){
  for (let i = 0; i< bookArray.length; i++) {
    let td = document.createElement("td");
    td.innerText = bookArray[i];
    analog.appendChild(td)
}


}
viewToLibrary()
//add to library
function addToLibrary(){
 titleValue = document.getElementById("title").value
 bookArray.push(titleValue)
 console.log(titleValue)
 viewToLibrary()


}

 

  button.addEventListener("click",()=>{
    form.style.visibility = "visible";
  })
  

  
  
  
submit.addEventListener("click",addToLibrary)
