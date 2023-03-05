const pwdInput = document.querySelector("#pwd");
pwdInput.addEventListener("input", () => checkMatchingPasswords());

const confirmInput = document.querySelector("#confirm");
confirmInput.addEventListener("input", () => checkMatchingPasswords());

function checkMatchingPasswords() {
    fstPassword = pwdInput.value.toString();
    sndPassword = confirmInput.value.toString();
    console.log(fstPassword, sndPassword);
    if ((fstPassword === "" || fstPassword !== sndPassword) && !pwdInput.classList.contains("invalid-password")) {
        pwdInput.classList.add("invalid-password");
        confirmInput.classList.add("invalid-password");
    }
    else if (fstPassword === sndPassword) {
        pwdInput.classList.remove("invalid-password");
        confirmInput.classList.remove("invalid-password"); 
        console.log(confirmInput.classList)
    }
}