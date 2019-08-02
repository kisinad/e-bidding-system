$(document).ready(function(){
$('.message a').click(function(){
$('form').animate({height:"toggle", opacity:"toggle"}, "slow");
});
const create = $('#create');

$('#create').click(function(){
	const companyname = $('#companyname').val();
	const companyemail = $('#companyemail').val();
	const companypassword = $('#companypassword').val();
	
	if (companyname && companyemail && companypassword){
		localStorage.setItem("companyname", companyname);
		localStorage.setItem("companyemail", companyemail);
		localStorage.setItem("companypassword",companypassword);
		location.reload();
	}
});
var obj = [
{
	userName:"Admin",
	passWord: "1234"
}]
$('#loginAdmin').click(function(){
	const userName = $('#userAdmin').val();
	// const companyemail = $('#companyemail').val();
	const userPassword = $('#passwordAdmin').val();
	
	if (userName == obj[0].userName &&  userPassword == obj[0].passWord){
		window.location.href="status_company.html";
		// $('#Account_names').empty().append(obj[0].userName);
	};
	// $('#Account_names').empty().append('userName');
});
$('#Account_names').empty().append(obj[0].userName);
$('#login').click(function(){
	var inputEmail = $('#email').val();
	var inputPassword = $('#password').val();
	if((inputEmail == localStorage.getItem('companyemail')) && (inputPassword ==localStorage.getItem('companypassword'))){
		// console.log("login sucessful!");
		window.location.href="status_user.html";

	};

});
var currentUser = localStorage.getItem('companyemail');
$('#Account_Names').empty().append(currentUser);
//Display & Hide admin login form
$('#adminBtn').click(function(){
	 $("#loginadminform").toggle();
	 return false
});
});

// });