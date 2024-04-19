
function passwordValidator() {

    if (document.getElementById("password").value===document.getElementById("confirmPassword").value){
        return true;
    }
    else{
        return false;
    }
};


/* tried to do disabled button when the form was incomplete + css, didn't use it

let btnCreateAccount = document.getElementById("btnCreateAccount");

function btnCreateAccountActivator (){
    let formInputs = document.getElementById("signUpForm").getElementsByTagName("input");
    let validCount=0;
    for (let index = 0; index < formInputs.length; index++) {
        if (formInputs[index].validity.valid){
            validCount++;
        }
    }
    if (validCount=(formInputs.length)){
        btnCreateAccount.removeAttribute("disabled");
    }
    else{
        btnCreateAccount.setAttribute("disabled");
    }
}
*/