$(document).ready(function(){
	$('#ref.no').val()=localStoreage.getItem(referenceNumber);
	$('#c_name').val()=localStoreage.getItem(companyName);
	$('#desc').val()=localStoreage.getItem(description);
	//return bid reference values in table for available tenders
}