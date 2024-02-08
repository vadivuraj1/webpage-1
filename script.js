var bar = document.querySelector(".bar i");
var nav = document.querySelector(".nav");

function toggleNav(){
    bar.classList.toggle("fa-bars")
    bar.classList.toggle("fa-times")
    nav.classList.toggle("nav-active")
}
bar.addEventListener("click", function(){
    toggleNav();
});

//slider//

var carousel = document.getElementById("slide");
var images = ["images/img-1.jpg","images/img-2.jpg","images/img-3.jpg","images/img-4.jpg"];
var num = 4;

function next(){
    num++;
    console.log("step-1");
    console.log("num=",num);
    if(num>=images.length){
        num=0;
        console.log("step-2");
        console.log("num",num);
        carousel.src=images[num]
        console.log("num",num);
    }
    else{
        console.log("step-3");
        carousel.src=images[num]
        console.log("num",num);
}
}
function back(){
    num--;
    if(num<0){
        num = images.length-1;
        carousel.src = images[num]
    }
    else{
        carousel.src = images[num]
    
    }

}
//card//

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

//service//

const form = document.getElementById('form')  
const username = document.getElementById('username') 
const email = document.getElementById('email') 
const password = document.getElementById('password')
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});    
function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	  


	// username validation

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	
	}
	

	// email validation

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	

	// password validation

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	// confirm password


	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}


// error function


function setErrorFor(input, message) {

	// assign all input  elements  to formControl
	const formControl = input.parentElement;
	
	const small = formControl.querySelector('small');
    //  formControl property asign to form-control error
	formControl.className = 'form-control error';
	small.innerText = message;
}

// success function

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

 //  email function
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}