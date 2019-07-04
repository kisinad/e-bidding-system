$(document).ready(function()
{
	
$('#submit').click(function()
{
    const referenceNumber = $('#referenceNumber').val();
    localStorage.setItem("ReferenceNumber", referenceNumber);

    const companyName = $('#companyName').val();
    localStorage.setItem("CompanyName",companyName);

    const description = $('#description').val();
    localStorage.setItem("Description", description);
    
    // {
    // const no = $('#no').val();
    // localStorage.setItem("no", no);
    // const referencenumber = $('#name_of_Receipient').val();
    // localStorage.setItem("name_of_Receipient",name_of_Receipient);
    // const address = $('#address').val();
    // localStorage.setItem("address", address);
    // const addenda = $('#Addenda').val();
    // localStorage.setItem("addenda", addenda);
});

});
// =======
// $(document).ready(function(){
// 	$('#newTender').evt.preventDefault();

// 	$('#reset').click(function clear(){
// 		$('#ref').val()='';
// 		$('#c_name').val()='';
// 		$('#desc').val()='';
// 	});

// 	$('#save').click(function(){
// 	const referenceNumber = $('#ref').val();
// 	const companyName = $('#c_name').val();
// 	const description = $('#desc').val();

// 	if (referenceNumber && companyName && description){
// 		localStorage.setItem("referenceNumber", referenceNumber);
// 		localStorage.setItem("companyName", companyName);
// 		localStorage.setItem("description",description);
// 		location.reload();
// 	};
// });
