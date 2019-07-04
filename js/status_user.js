$(document).ready(function(){
	$('ref.no').innerHTML=localStoreage.getItem(referenceNumber);
	$('c_name').innerHTML=localStoreage.getItem(companyName);
	$('desc').innerHTML=localStoreage.getItem(description);
	//return bid reference values in table for available tenders
}