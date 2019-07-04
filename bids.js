$( document ).ready(function() 

{

$('#submit').click(function clear()
{
const date= $('#date').val();
localStorage.setItem("Date", date);


const to = $('#to').val();
localStorage.setItem("To", to);

{
    const bid_no = $('#bid_no').val();
    localStorage.setItem("bid_no", bid_no);
    const referencenumber = $('#referencenumber').val();
    localStorage.setItem("referencenumber",referencenumber);
    const descriptionOfWorks = $('#descriptionOfWorks').val();
    localStorage.setItem("descriptionOfWorks", descriptionOfWorks);
    const addenda = $('#Addenda').val();
    localStorage.setItem("addenda", addenda);

{
    const recipient = $('#recipient').val();
    localStorage.setItem("recipient", recipient);
    const address = $('#address').val();
    localStorage.setItem("address",address);
    const purpose = $('#purpose').val();
    localStorage.setItem("purpose", purpose);
    const cost = $('#cost').val();
    localStorage.setItem("cost", cost);
{
const phoneNumber = $('#phoneNumber').val();
localStorage.setItem("PhoneNumber", phoneNumber);

{
const email = $('#email').val();
localStorage.setItem("Email", email);

{
const signature = $('#signature').val();
localStorage.setItem("Signature", signature);

{
const name = $('#name').val();
localStorage.setItem("Name", name);

{
const capacity = $('#capacity').val();
localStorage.setItem("Capacity", capacity);

{
const authority = $('#authority').val();
localStorage.setItem("Authority", authority);

{
const date = $('#date').val();
localStorage.setItem("Date", date);

{
const submit = $('#submit').val();
localStorage.setItem("Submit", submit);
{
const cancel = $('#cancel').val();
localStorage.setItem("Cancel", cancel);
location.reload();
               };
                };
            };
         };
      };
     };
    };
            };
         };
      };
     };
});
});