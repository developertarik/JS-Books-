let bookArray =["Silmarillion","BİİİPS","didiiiiiiiit"];

  function Book(author,title,pages,read){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
   
  }

  
Book();
analog  = document.getElementById("analog")
for (let i = 0; i < bookArray.length; ++i) {
      let td  = document.createElement("td");
      td.innerText = bookArray[i];

       analog.appendChild(td)
     }
 
function addToLibrary(){
  const form  = document.getElementById("form")
  const button = document.getElementById("button")
  const submit = document.getElementById("submit")
   title = document.getElementById("title")

  button.addEventListener("click",()=>{
    form.style.visibility = "visible";
  })
}
  
  submit.addEventListener("click",()=>{
  bookArray += title.innerText
  })
  
  
  
  
  addToLibrary()
  
  
  
  
  
  
  
  
  
  
  
  
  
  //variables


// const button = document.getElementById("button");
// const form = document.getElementById("form")
// const click_button =  document.createElement("button")
// function visible(){
//   form.style.visibility = "visible";
// }
// function addToLibrary(visible){

//       button.addEventListener("click",visible)
//   };    

// // }
//  addToLibrary(visible)
//   let analog  = document.getElementById("analog")
//     for (let i = 0; i < bookArray.length; ++i) {
//         let td  = document.createElement("td");
//        td.innerText = bookArray[i];
   
//          analog.appendChild(td)
//        }
    
// // let submit = document.getElementById("submit");
// // function visibleBooks(){
// //   let td  = document.createElement("td");
// //   const i = analog.innerText
// //   td.innerText = bookArray[i];
  
// //    analog.appendChild(td)
// // };
// // submit.addEventListener("click",visibleBooks);


// function anew() {
//   let x = document.getElementById("form");
//   let text = "";
//   let i;
//   for (i = 0; i < x.length ;i++) {
//     text += x.elements[i].value + "<br>";
//   }
//   document.getElementById("form").innerHTML = text;}

// submit.addEventListener("click",anew)
// 