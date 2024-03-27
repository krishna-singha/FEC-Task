const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

const isEmail = (email) => {
    let atSymbol = email.indexOf('@');
    if (atSymbol < 1) return false;
    let dot = email.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === email.length - 1) return false;
    return true;
}

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const span = formControl.querySelector('span');
    formControl.className = 'form-input error';
    span.innerText = message;
}
const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-input success';
}

const successMsg = () => {
    const formControl = document.getElementsByClassName('form-input');
    const count = formControl.length - 1;
    let successLength = 0;

    for (let i = 0; i < formControl.length; i++) {
        if (formControl[i].className === "form-input success") {
            successLength++;
        }
    }
    if (successLength === count) {
        form.reset();

        setTimeout(() => {
            Swal.fire({
                title: "Message Sent!",
                text: "Your message has been sent successfully. We will get back to you soon.",
                icon: "success"
              });
        }, 700);
    }
}

const validate = () => {
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === "") {
        setErrorFor(fullName, 'Name cannot be blank');
    }
    else if (nameValue.length < 3) {
        setErrorFor(fullName, 'Name must be at least 3 characters long');
    }
    else {
        setSuccessFor(fullName);
    }

    if (emailValue === "") {
        setErrorFor(email, 'Email cannot be blank');
    }
     else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (messageValue === "") {
        setErrorFor(message, 'Message cannot be blank');
    }
    else if (messageValue.length < 10) {
        setErrorFor(message, 'Message must be at least 10 characters long');
    }
    else {
        setSuccessFor(message);
    }

    successMsg();
}