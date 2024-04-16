const textarea = document.getElementById("textbox");
const button = document.getElementById("enter");
const article = document.getElementById("article");

const pS = "<p>"; 
const pE = "<p/>"; 

button.addEventListener("click", (e) => {
	article.innerHTML = `${pS} ${parseText(textarea.value)} ${pE}`;
})

function parseText(text) {

	const paragraphs = text.split("\n");
	let articleText = "";
	
	paragraphs.forEach(paragraph => {
		articleText += `${pS} ${paragraph} ${pE}`;
	});
	
	return articleText;
}