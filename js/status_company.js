$(document).ready(function(){
	$('#newTender').evt.preventDefault();

	$('#reset').click(function clear(){
		$('#ref').val()='';
		$('#c_name').val()='';
		$('#desc').val()='';
	});

	$('#save').click(function(){
	const referenceNumber = $('#ref').val();
	const companyName = $('#c_name').val();
	const description = $('#desc').val();

	if (referenceNumber && companyName && description){
		localStorage.setItem("referenceNumber", referenceNumber);
		localStorage.setItem("companyName", companyName);
		localStorage.setItem("description",description);
		location.reload();
	};
})	