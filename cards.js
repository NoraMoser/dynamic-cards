console.log("hi");

let input = document.getElementById("textInput");
let createButton = document.getElementById("createButton");
let outputCard = document.getElementById("greetingCardMain");

// let outputText = document.getElementById("userMessage");
// let outputText = document.getElementById("userMessage");

createButton.addEventListener("click", create);

	// userMessage();
// let deleteButton = document.getElementById("deleteButton");
// console.log(outputText);
// let garbage = deleteButton.removeChild(outputCard);




function create() {
let userInput = input.value;
// outputCard = outputCard.innerHTML;
	let greetingCard = document.createElement("div");
	greetingCard.innerHTML = `	<div id="card">
								<h1 id="header">Happy Birthday!</h1>
								<p id="message">${userInput}</p>
								</div>`;
	outputCard.appendChild(greetingCard);

		
// outputCard.innerHTML += greetingCard;
let deleteBtn = document.createElement("BUTTON");
let deleteBtnText = document.createTextNode("DELETE");
deleteBtn.appendChild(deleteBtnText);
greetingCard.appendChild(deleteBtn);

deleteBtn.addEventListener("click", removeCard);

function removeCard() {

            // this = song and dance
            let card = this.parentNode;
            outputCard.removeChild(card);

        };

};
// deleteFunction();
// deleteBtn[i].addEventListener("click", function(){
// 	getRidOfIt();
// });

// function deleteFunction() {
//         // console.log(deleteBtn);
//         for(i = 0; i < deleteBtn.length; i++){

        
//         }


 // function getRidOfIt() {
 // 	// let onlyMessageArea = document.getElementById("greetingCard");
 //       while(outputCard.firstChild){
 //        outputCard.removeChild(outputCard.firstChild);
 //    }
 //  }
// deleteBtn.addEventListener("click", function(){

//             //this = song and dance
//             let card = this.parentNode;
//             outputCard.removeChild(card);

//         });





	



