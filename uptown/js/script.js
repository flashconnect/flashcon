function validateForm(){

    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var message = document.forms["myForm"]["message"].value;

    if(name == ""){
        alert("Please enter your name");
        return false;
    }

    if(email == ""){
        alert("Please enter your email");
        return false;
    }

    if(subject == ""){
        alert("Please enter your subject");
        return false;
    }

    if(message == ""){
        alert("Please enter your message");
        return false;
    }
}