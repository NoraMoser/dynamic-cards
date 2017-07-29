console.log("hi");

let input = document.getElementById("textInput");
let createButton = document.getElementById("createButton");
let outputCard = document.getElementById("greetingCardMain");
let outputText = document.getElementById("userMessage");

createButton.addEventListener("click", function(){
input.addEventListener("keydown", function(event) {
	// console.log(event);

	outputText.innerHTML = event.target.value;
	
});
	createCard();
});

function userMessage() {

}

function createCard() {
	let greetingCard = 
		`<div id="greetingCard">
		<h1>Happy Valentines Day to You!</h1>
		 <h3 id="userMessage"></h3>
		 </div?`;
outputCard.innerHTML = greetingCard;

}

