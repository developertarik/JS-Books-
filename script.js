let bookArray =[];

  function Book(author,title,number,read){
      this.author = author;
      this.title = title;
     this.number = number;
     this.read = read;
 
  }
  //variables


const button = document.getElementById("button");
const form = document.getElementById("form")
const click_button =  document.createElement("button")
function visible(){
  form.style.visibility = "visible";
}
function addToLibrary(visible){

      button.addEventListener("click",visible)
  };    

// }
 addToLibrary(visible)
  let analog  = document.getElementById("analog")
    for (let i = 0; i < bookArray.length; ++i) {
        let td  = document.createElement("td");
       td.innerText = bookArray[i];
   
         analog.appendChild(td)
       }
    
// let submit = document.getElementById("submit");
// function visibleBooks(){
//   let td  = document.createElement("td");
//   const i = analog.innerText
//   td.innerText = bookArray[i];
  
//    analog.appendChild(td)
// };
// submit.addEventListener("click",visibleBooks);


function anew() {
  let x = document.getElementById("form");
  let text = "";
  let i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
    text += bookArray
  }
  document.getElementById("form").innerHTML = text;}

submit.addEventListener("click",anew)