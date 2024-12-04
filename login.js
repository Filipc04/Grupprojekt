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
  updateRequirement("criteria", capitalValid && digitValid && specialValid && lengthValid);
});

function updateRequirement(id, isValid) {
  const element = document.getElementById(id);
  if (isValid) {
    element.classList.add("valid");
    element.classList.remove("invalid");

    setTimeout(() => {
      element.style.display = "none";
    }, 500); 
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
    element.style.display = ""; 
  }
}


document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const successMessage = document.createElement("p");
  successMessage.textContent = "You are now signed up and logged in!";
  successMessage.classList.add("success_message");  
  successMessage.id = "successMessage";

  const loginForm = document.getElementById("loginForm");

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

  if (!capital || !digit || !special || !length) {
    alert("Your password does not meet all criteria!");
    return;
  }

  else{
      loginForm.appendChild(successMessage);
  
    setTimeout(() => {
      successMessage.style.display = "none";
      window.location.href = "index.html";
    }, 1500);
  }
  
  console.log(
    `New member has a username of ${username.value} and password of ${password.value}`
  );

  username.value = "";
  password.value = "";
});
