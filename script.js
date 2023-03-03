const pwdInput = document.querySelector("#pwd");

const confirmInput = document.querySelector("#confirm");
confirmInput.addEventListener("keydown", () => checkMatchingPasswords());

function checkMatchingPasswords() {
    fstPassword = pwdInput.textContent.toString();
    sndPassword = confirmInput.textContent.toString();

    if (fstPassword === "" || fstPassword !== sndPassword) {
        pwdInput.classList.add("invalid-password");
        confirmInput.classList.add("invalid-password")
    }
}