$(document).ready(function(){
$('.message a').click(function(){
$('form').animate({height:"toggle", opacity:"toggle"}, "slow");
});

// const companyname = $('#companyname');
// const companyemail = $('#companyemail');
// const companypassword = $('#companypassword');
const create = $('#create');

$('#create').click(function(){
	const companyname = $('#companyname').val();
	const companyemail = $('#companyemail').val();
	const companypassword = $('#companypassword').val();
	// console.log(companyname);
	// console.log(companyemail);
	// console.log(companypassword);

	if (companyname && companyemail && companypassword){
		localStorage.setItem("companyname", companyname);
		localStorage.setItem("companyemail", companyemail);
		localStorage.setItem("companypassword",companypassword);
		location.reload();
	}
});
$('#login').click(function(){
	var inputEmail = $('#email').val();
	var inputPassword = $('#password').val();
	if((inputEmail == localStorage.getItem('companyemail')) && (inputPassword ==localStorage.getItem('companypassword'))){
		// console.log("login sucessful!");
		window.location.href="index-login.html";
	}
	// const keys = Object.keys(localStorage)
	// for (i=0; i<localStorage.length; i++){
	// 	if()
	// }
});
});