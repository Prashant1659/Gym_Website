// // var a=document.getElementById('btn1');
// // var b=document.getElementById('name');
// // // console.log(b.value);
// // var c=document.getElementById('email1');
// // var d=document.getElementById('phnumber');
// // var e=document.getElementById('message');
// // var form=document.getElementById('formID');
// // let b1=b2=b3=b4=b5=false;
// // console.log(b1,b2,b3,b4,b5);
// // if(b.value!=null){
// //     b1=true;
// // }
// // else{
// //     b1=false;
// // }
// // if(c.value!=null){
// //     b2=true;
// // }
// // else{
// //     b2=false;
// // }
// // if(d.value!=null){
// //     b3=true;
// // }
// // else{
// //     b3=false;
// // }
// // if(e.value!=null){
// //     b4=true;
// // }
// // else{
// //     b4=false;
// // }
// // form.onkeyup(function(){
// //     if(b1!=false){
// //         if(b2!=false){
// //             if(b3!=false){
// //                 if(b4!=false){
// //                     a.removeAttribute(disabled);
// //                 }
// //                 else{
// //                     a.attr("disabled","true");
// //                 }
// //             }
// //             else{
// //                 a.attr("disabled","true");
// //             }
// //         }
// //         else{
// //             a.attr("disabled","true");
// //         }
// //     }
// //     else{
// //         a.attr("disabled","true");
// //     }
// // });

// // a.addEventListener('click',verify());
// // function verify(){
// //     var name=b.value;
// //     console.log(b);
// // }
// // Get the form element
// const form = document.getElementById('formID');

// // Get the input fields
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email1');
// const phNumberInput = document.getElementById('phnumber');
// const messageInput = document.getElementById('message');

// // Function to validate email address
// function validateEmail(email) {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }

// // Function to validate phone number
// function validatePhoneNumber(phNumber) {
//     const re = /^[6-9]\d{9}$/;
//     return re.test(phNumber);
// }

// // Function to validate the form before submission
// function validateForm(event) {
//     const nameValue = nameInput.value.trim();
//     const emailValue = emailInput.value.trim();
//     const phNumberValue = phNumberInput.value.trim();
//     const messageValue = messageInput.value.trim();

//     const isNameValid = nameValue !== '';
//     const isEmailValid = validateEmail(emailValue);
//     const isPhNumberValid = validatePhoneNumber(phNumberValue);
//     const isMessageValid = messageValue !== '';

//     const isFormValid = isNameValid && isEmailValid && isPhNumberValid && isMessageValid;

//     if (!isFormValid) {
//         alert('Please fill in all fields before submitting.');
//         event.preventDefault(); // Prevent form submission
//     } else {
//         // Additional validation (e.g., server-side validation)

//         // Clear form entries
//         nameInput.value = '';
//         emailInput.value = '';
//         phNumberInput.value = '';
//         messageInput.value = '';

//         // Refresh the page
//         location.reload();
//     }
// }

// // Event listener for form submission
// form.addEventListener('submit', validateForm);



// function clearErrors(){

//     errors = document.getElementsByClassName('formerror');
//     for(let item of errors)
//     {
//         item.innerHTML = "";
//     }
    
    
//     }
//     function seterror(id, error){
//     //sets error inside tag of id 
//     element = document.getElementById(id);
//     element.getElementsByClassName('formerror')[0].innerHTML = error;
    
//     }
    
//     function validateForm(){
//     var returnval = true;
//     clearErrors();
    
//     //perform validation and if validation fails, set the value of returnval to false
//     var name = document.forms['myForm']["fname"].value;
//     if (name.length<5){
//         seterror("name", "*Length of name is too short");
//         returnval = false;
//     }
//     else if (name.length == 0){
//         seterror("name", "*Length of name cannot be zero!");
//         returnval = false;
//     }
    
//     var email = document.forms['myForm']["femail"].value;
//     if (email.length>25){
//         seterror("email", "*Email length is too long");
//         returnval = false;
//     }
    
//     var phone = document.forms['myForm']["fphone"].value;
//     if (phone.length != 10){
//         seterror("phone", "*Phone number should be of 10 digits!");
//         returnval = false;
//     }
    
//     var password = document.forms['myForm']["fpass"].value;
//     if (password.length < 6){
//         seterror("pass", "*Password should be atleast 6 characters long!");
//         returnval = false;
//     }
    
//     var cpassword = document.forms['myForm']["fcpass"].value;
//     if (cpassword != password){
//         seterror("cpass", "*Password and Confirm password should match!");
//         returnval = false;
//     }
    
//     return returnval;
//     }

function clearErrors(){
    ele=document.getElementsByClassName("formerror");
    // console.log(ele);
    for(let item of ele){
        item.innerHTML="";
    }
}
function setError(id,err){
    ele=document.getElementById(id);
    console.log(err);
    ele.innerHTML=err;
}
function validateForm(){
    var check=true;
    clearErrors();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=docuemnt.getElementById("phone").value;
    console.log(email.length);
    console.log("phone",phone.length);
    if(name.length == 0){
        setError("fname","name can't be empty");
        check= false;
    }
    if(name.length<5){
        setError("fname","name too short");
        check= false;
    }
    if(email.length==0){
        setError("femail","email can't be empty");
    }
    if(email.length>20){
        setError("femail","email too long");
        check= false;
    }
    if(phone.length!=10){
        setError("fphone","number is not valid");
        check=false;
    }
    // clearErrors();
    return false;
}