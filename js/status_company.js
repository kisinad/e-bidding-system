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