function validateForm() {
    var check=true;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email1').value;
    var phnumber = document.getElementById('phnumber').value;
    var message = document.getElementById('message').value;

    if (name == "" || email == "" || phnumber == "" || message == "") {
        alert("All fields must be filled out");
        // sform.innerHTML="*All fields must be filled "
        check= false;
    }

    if (!validateEmail(email) ) {
        alert("Invalid email address");
        check= false;
    }

    if((phnumber.length<10) ){
        alert("Number should be of 10 digit")
        // sphone.innerHTML="* number should be of 10 digits";
        check= false;
    }
    
    else if (!validatePhoneNumber(phnumber) ) {
        alert("Invalid phone number");
        check= false;
    }
    
    if(check){
        alert("Data submitted");
    }
    return check;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhoneNumber(phnumber) {
    var re = /^\d{10}$/;
    return re.test(phnumber);
}
