function errorPrinting(elm,msg){
    document.getElementById(elm).innerHTML = msg;

}

function validateForm(){
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for (let i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            hobbies.push = checkboxes[i].value;
        }
        
    }

    var nameError = emailError = mobilError = countryError = genderError = true;

    if (name==""){
        errorPrinting("nameErr","Please enter a Name");
    }
    else{
        var reg = "/^[a-zA-Z\s]+$/";
        if (reg.test(name) == false){
            errorPrinting("nameErr","Enter a Valid Name");
        }
        else{
            errorPrinting("nameErr","");
            nameError = false;
        }
    }
    if (email == ""){
        errorPrinting("emailErr","Please enter a Email");
    }
    else {
        var reg = "/^\S+@\S+\.\S+$/";
        if (reg.test(email)==false) {
            errorPrinting("emailErr","Please enter a valid Email");
        }
    }
    if (mobile == ""){
        errorPrinting("mobileErr","Please enter a Mobile Number");
    }
    else {
        var reg = "/^[1-9]\d{9}$/";        ;
        if (reg.test(mobile)==false) {
            errorPrinting("mobileErr","Please enter a valid Mobile Number");
        }
    }

    if (country == "Select"){
        errorPrinting("countryErr","Please select a Country");
    }
    else{
        errorPrinting("countryErr","");
        countryError=false;
    }

    if(nameError || emailError || mobilError || countryError === true){
        alert("True");
    }
    else{
        alert("False");
    }
    

}