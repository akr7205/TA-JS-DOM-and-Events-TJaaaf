let form = document.querySelector('form');
let usernameError = '';

function doesContainNumber(str) {
    return str.split('').some(e => Number(e));
}
function validEmail(str) {
    if (str.includes('@') && str.length >= 6) {
        return true;
    }
}
function validPhoneNumber(str) {
    return str.split('').every(e => Number(e));
}
function handelSubmit(event) {
    event.preventDefault();
    let UserELm = event.target.elements.username;
    console.dir(event.target);
    console.log(UserELm.value);
    remove(UserELm);
    if (UserELm.value == '') {
        setFail(UserELm, "Username can't be empty")
    }
    else if (UserELm.value.length < 4) {
        setFail(UserELm, "Username length can't be less than 4");
    }
    else {
        setSuccess(UserELm);
    }
    //name
    let name = event.target.elements.name;
    remove(name);
    if (doesContainNumber(name.value)) {
        setFail(name, "You can't use number in the name field");
    }
    else {
        setSuccess(name);
    }
    //email
    let email = event.target.elements.email;
    remove(email);
    if (validEmail(email.value)) {
        setSuccess(email);
    }
    else {
        setFail(email, 'Not a valid email');
    }
    //phone
    let phone = event.target.elements.phone;
    remove(phone);
    console.log(phone.value);
    if (validPhoneNumber(phone.value)) {
        setSuccess(phone)
    }
    else {
        setFail(phone, 'Not a valid phone number');
    }
    //pasword
    let pw1 = event.target.elements.password;
    let pw2 = event.target.elements.password2;
    console.log(pw1.value);
    console.log(pw2.value);

    remove(pw1);
    remove(pw2);
    if (pw1.value == '') {
        setFail(pw1, 'Pasword must be filled')
    }
    else {
        setSuccess(pw1);
    }

    if (pw1.value !== pw2.value) {
        setFail(pw2, 'Not same Password')
    }
    else {
        setSuccess(pw2);
    }

}
function setFail(input, message) {
    console.log(input.nextElementSibling);
    input.nextElementSibling.innerText = message;
    input.classList.add('fail');
    let parentElm = input.parentElement;
    let exclamationCircle=parentElm.querySelector('.fa-exclamation-circle');
    exclamationCircle.classList.add('visible');
}
function setSuccess(input) {
    let parentElm = input.parentElement;
    let checkCircle=parentElm.querySelector('.fa-check-circle');
    console.log(checkCircle);
    console.log(parentElm);
    input.classList.add('success');
    checkCircle.classList.add('visible');
}
function remove(input) {
    input.classList.remove('fail');
    input.classList.remove('success');
    input.nextElementSibling.innerText = '';    
    let parentElm = input.parentElement;
    let checkCircle=parentElm.querySelector('.fa-check-circle');
    checkCircle.classList.remove('visible');
    let exclamationCircle=parentElm.querySelector('.fa-exclamation-circle');
    exclamationCircle.classList.remove('visible');
    
    

}
form.addEventListener('submit', handelSubmit);