// JavaScript is capitalized using "camel case": m
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "elem" is an abbreviation for "the element that was clicked in the HTML"
var text = document.getElementById("text");

//generates a number between 1 and four when called
function Calculator() {
   x = Math.floor((Math.random() * 4) + 1);
   return x;
}

//uses random number to implement CSS
function qRandom(){
	Calculator();
	console.log(x);
	if (x == 1){
		qdiv1.classList.add("left-bottom");
		qdiv2.classList.add("right-top");
		qdiv3.classList.add("center-content");
		qdiv4.classList.add("center-content");
		qdiv5.classList.add("right-bottom");
		qdiv6.classList.add("center-content");
	}
	else if (x == 2){
		qdiv1.classList.add("center-content");
		qdiv2.classList.add("right-bottom");
		qdiv3.classList.add("center-content");
		qdiv4.classList.add("left-bottom");
		qdiv5.classList.add("right-bottom");
		qdiv6.classList.add("right-top");
	}
	else if (x == 3){
		qdiv1.classList.add("right-top");
		qdiv2.classList.add("left-bottom");
		qdiv3.classList.add("right-bottom");
		qdiv4.classList.add("left-top");
		qdiv5.classList.add("right-bottom");
		qdiv6.classList.add("center-content");
	}
	else if (x == 4){
		qdiv1.classList.add("center-content");
		qdiv2.classList.add("right-bottom");
		qdiv3.classList.add("center-content");
		qdiv4.classList.add("left-bottom");
		qdiv5.classList.add("right-bottom");
		qdiv6.classList.add("right-top");
	}
}






// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
