document.addEventListener("DOMContentLoaded", function () {
    var name = document.querySelector("form[name='contact-form'] input[name='Name']");
    var email = document.querySelector("form[name='contact-form'] input[name='Email']");
    var phone = document.querySelector("form[name='contact-form'] input[name='Phone']");
    var nameMess = document.querySelector("form[name='contact-form'] span[name='name-message']");
    var emailMess = document.querySelector("form[name='contact-form'] span[name='email-message']");
    var phoneMess = document.querySelector("form[name='contact-form'] span[name='phone-message']");
    document.querySelector("form[name='contact-form'] input[name='submit']").onclick = function () {
        var vN =  validateName();
        var vE = validateEmail();
        var vP = validatePhone();
        if (vN && vE && vP) {            
            alert(name.value + ' - ' + email.value + ' - ' + phone.value);
        }
    }

    var validateName = function () {
        nameMess.innerHTML = "";
        if (name.value === null || name.value === "" || /^\s+$/.test(name.value)) {
            nameMess.style.color = "red";
            nameMess.innerHTML = "Please enter Name";
            return false;
        }       
        return true;
    }

    var validateEmail = function () {
        emailMess.innerHTML = "";
        if (email.value === null || email.value === "" || /^\s+$/.test(email.value)) {
            emailMess.style.color = "red";
            emailMess.innerHTML = "Please enter Email";
            return false;
        }    
        return true;
    }


    var validatePhone = function () {
        phoneMess.innerHTML = "";    
        if (phone.value === null || phone.value === "" || /^\s+$/.test(phone.value)) {
            phoneMess.style.color = "red";
            phoneMess.innerHTML = "Please enter Phone";
            return false;
        }        
        return true;
    }

});