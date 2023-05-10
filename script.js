let bookArray =["Hobbit","Harry Potter","Silmarillion"];

  function Book(author,title,number,read){
      this.author = author;
      this.title = title;
     this.number = number;
     this.read = read;
 
  }
  const button = document.getElementById("button");
  const click_button =  document.createElement("button")
function addToLibrary(author,title,number,read,click_button,button){
   
     button.addEventListener(click,()=>{
      author = alert("How is author?")
       title = alert("how is title")
        number = alert("how many pages?")
       read = alert("read or not read")
       console.log("za")
    })};    

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
analog.appendChild(button)
