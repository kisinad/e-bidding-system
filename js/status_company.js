$(document).ready(function()
{
	
// $('#submit').click(function clear()


//$('#newTender').evt.preventDefault();

$('#reset').click(function()
{
    $('#referencenumber').val()='';
    $('#companyName').val()='';
    $('#description').val()='';});

$('#save').click(function()
{
    const referenceNumber = $('#referenceNumber').val();
    const companyName = $('#companyName').val();
    const description = $('#description').val();
    const bidOutPut = $('#bidOutPut').val();
    // var companyName = $('#companyName').val();
    // var description = $('#description').val();

    // localStorage.setItem("Description", description);
    // localStorage.setItem("ReferenceNumber", referenceNumber);
    // localStorage.setItem("CompanyName",companyName);
   

    // console.log(referenceNumber);
    // console.log(companyName);
    // console.log(description);
    if (referenceNumber && companyName && description){
        localStorage.setItem('referenceNumber', referenceNumber);
        // console.log(localStorage.setItem(referenceNumber, companyName, description));
        localStorage.setItem('description', description);
        // localStorage.setItem("ReferenceNumber", referenceNumber);
        localStorage.setItem("CompanyName",companyName);
        // localStorage.setItem("CompanyName",companyName);
       location.reload();
       localStorage.getItem(referencenumber)
        // console.log(referenceNumber);
        // console.log(companyName);
        // console.log(description);
        $('div#bidOutPut').html(localStorage.key(0)) ;

    }
    // for (let i = 0; i<localStorage.length; i++)
    //     var key = localStorage.key(i);
    //     const value = localStorage.getItem(key);
    //     console.log(value);
        // $('#bidOutPut').html('key') ;
        // $('#bidOutPut').html('key');
        // $('#bidOutPut').append( "<p>Test</p>" );
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
// });
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