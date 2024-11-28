document.getElementById("password").addEventListener("input", function () {
  const password = this.value;

  const capital = /[A-Z]/g;
  const digit = /\d/;
  const special = /[!@#$%^&*(),.?":{}|<>]/;
  const length = /.{8,}/;

  const capitalValid = (password.match(capital) || []).length >= 2;
  const digitValid = digit.test(password);
  const specialValid = special.test(password);
  const lengthValid = length.test(password);

  updateRequirement("capital", capitalValid);
  updateRequirement("digit", digitValid);
  updateRequirement("special", specialValid);
  updateRequirement("length", lengthValid);
});

function updateRequirement(id, isValid) {
  const element = document.getElementById(id);
  if (isValid) {
    element.classList.add("valid");
    element.classList.remove("invalid");
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
  }
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username");
  const password = document.getElementById("password").value;

  if (username.value === "" || password === "") {
    alert("Ensure you input a value in both fields!");
    return;
  }


  const capital = (password.match(/[A-Z]/g) || []).length >= 2;
  const digit = /\d/.test(password);
  const special = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const length = password.length >= 8;
  
  if (username.value === "" || password.value === "") {
    alert("Ensure you input a value in both fields!");
    return;
  }

  if(!capital){
    alert("Your password must contain at least two uppercase letters!");
    return;
  }

  if (!digit) {
    alert("Your password must contain at least one digit!");
    return;
  }

  if (!special) {
    alert("Your password must contain at least one special character!");
    return;
  }

  if (!length) {
    alert("Your password must be at least 8 characters long!");
    return;
  }

  alert("You are now signed up and logged in!");
  console.log(
    `New member has a username of ${username.value} and password of ${password.value}`
  );

  username.value = "";
  password.value = "";
});