$( document ).ready(function() 
{
document.getElementById("myForm").reset();
{

$('#submit').click(function()
{
const nameofRecipient = $('#date').val();
localStorage.setItem("Date", nameofRecipient);
// });
$('#to').click(function()
{
const to = $('#to').val();
localStorage.setItem("To", to);
location.reload();
// });
    $('#bid_no').click(function()
{
    const no = $('#bid_no').val();
    localStorage.setItem("bid_no", no);
    location.reload();
    const referencenumber = $('#referencenumber').val();
    localStorage.setItem("referencenumber",referencenumber);
    location.reload();
    const descriptionOfWorks = $('#descriptionOfWorks').val();
    localStorage.setItem("descriptionOfWorks", descriptionOfWorks);
    location.reload();
    const addenda = $('#Addenda').val();
    localStorage.setItem("addenda", addenda);
    location.reload();
    });

const create = $('#create');
$('#address').click(function()
{
    const nameofRecipient = $('#nameofRecipient').val();
    const address = $('#address').val();
    const purpose = $('#purpose').val();
    const cost = $('#cost').val();
    
        localStorage.setItem("nameofRecipient", nameofRecipient);
        localStorage.setItem("address",address);
        localStorage.setItem("purpose", purpose);
        localStorage.setItem("amount&currency", amount&currency);
        location.reload();
    // });
$('#phoneNumber').click(function()
{
const phoneNumber = $('#phoneNumber').val();
localStorage.setItem("phoneNumber", phoneNumber);
// });

$('#email').click(function()
{
const email = $('#email').val();
localStorage.setItem("email", email);
// });

$('#signature').click(function()
{
const signature = $('#signature').val();
localStorage.setItem("signature", signature);
});
$('#name').click(function()
{
const name = $('#name').val();
localStorage.setItem("name", name);
});

$('#capacity').click(function()
{
const capacity = $('#submit').val();
localStorage.setItem("submit", submit);
});

$('#authority').click(function()
{
const authority = $('#authority').val();
localStorage.setItem("authority", authority);
});
$('#time').click(function()
{
const time = $('#time').val();
localStorage.setItem("time", time);
});
$('#submit').click(function()
{
const submit = $('#submit').val();
localStorage.setItem("submit", submit);
               });
            });
         });
      });
     });