const eye = document.querySelector("#eye");
const passContainer = document.querySelector("#confirmPass");

eye.onclick = () => {
    if (passContainer.type === "password") {
        passContainer.type = "text";
    } else {
        passContainer.type = "password";
    }
};
