// form validation
const form = document.getElementById("form");
const fullName = document.getElementById("fullName") || "";
const email = document.getElementById("email") || "";
const msg = document.getElementById("msg") || "";
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    validateInputs();
});
const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".invalid-feedback");
    console.log(errorDisplay);
    errorDisplay.innerHTML = message;
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
};
const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".invalid-feedback");
    errorDisplay.innerText = "";
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
};
const isValidEmail = (email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const validateInputs = ()=>{
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const msgValue = msg.value.trim();
    if (fullNameValue === "") setError(fullName, "Your Name is required");
    else setSuccess(fullName);
    if (emailValue === "") setError(email, "Your email is required");
    else if (!isValidEmail(emailValue)) setError(email, "Providea valid Email address");
    else setSuccess(email);
    if (msgValue === "") setError(msg, "Your message is required");
    else setSuccess(msg);
};

//# sourceMappingURL=index.34c054d9.js.map
