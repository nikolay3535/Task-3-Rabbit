const form = document.querySelector("form");
// events
form.addEventListener("submit", logIn);
// functions
function logIn(event) {
    const logInErrors = [];
    const isValidEmail = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const userName = document.querySelector("#name").value.trimEnd();
    const mail = document.querySelector("#mail").value.trimEnd();
    const message = document.querySelector("#message").value.trimEnd();
    // user-erors
    const userNameError = document.querySelector(".user-name-error");
    const userMailError = document.querySelector(".user-mail-error");
    const userMessageError = document.querySelector(".user-message-error");
    event.preventDefault();
    if (userName.length < 3 || userName.length > 30) {
        userNameError.textContent = "Name must be 3 to 30 symbols!";
        logInErrors.push(userNameError.textContent);
    } else {
        userNameError.textContent = "";
    };
    if (!isValidEmail.test(mail)) {
        userMailError.textContent = "Invalid email";
        logInErrors.push(userMailError.textContent);
    } else {
        userMailError.textContent = "";
    };
    if (message.length < 18 || message.length > 180) {
        userMessageError.textContent = "Message must be 18 to 180 symbols!";
        logInErrors.push(userMessageError.textContent);
    } else {
        userMessageError.textContent = "";
    };
    if (logInErrors.length) {
        return;
    };
    userNameError.textContent = "";
    userMailError.textContent = "";
    userMessageError.textContent = "";
    form.reset();
    regComplete()
};
function regComplete() {
    const regComplete = document.querySelector(".reg-complete");
    regComplete.textContent = "Thank you!";
};