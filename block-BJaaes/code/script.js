let form = document.querySelector("form");

let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  userInfo.email = form.elements.email.value;
  userInfo.gender = form.elements.gender.value;
  userInfo.terms = form.elements.terms.checked;

  // send data to server
  console.log(userInfo);
}

form.addEventListener("submit", handleSubmit);
