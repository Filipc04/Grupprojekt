document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const errorDiv = document.getElementById("errorMessage");

    errorDiv.innerHTML = "";

    const passwordRegex = /^(?=(.*[A-Z]){2,})(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;


  
    if (username.value === "" || password.value === "") {
      alert("Ensure you input a value in both fields!");
      return;
    } 

    const capital = (password.value.match(/[A-Z]/g) || []).length >= 2;
    const digit = /\d/.test(password.value);
    const special = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);
    const length = password.value.length >= 8;

    if(!capital || !digit || !special || !length){
      if(!capital){
        const message = document.createElement("p");
        message.textContent = "Your password must contain at least two uppercase letters!"
        errorDiv.appendChild(message);
      }

      if(!digit){
        const message = document.createElement("p");
        message.textContent = "Your password must contain at least one digit!"
        errorDiv.appendChild(message);
      }

      if(!special){
        const message = document.createElement("p");
        message.textContent = "Your password must contain at least one special character!"
        errorDiv.appendChild(message);
      }

      if(!length){
        const message = document.createElement("p");
        message.textContent = "Your password must be at least 8 characters long!"
        errorDiv.appendChild(message);
      }
      
      return;
    } 
   
    alert("You are now signed up and logged in!");
    
    console.log(
    `New member has a username of ${username.value} and password of ${password.value}`
    );
  
    

    console.log(
      `New member has a username of ${username.value} and password of ${password.value}`
    );
  
    username.value = "";
    password.value = "";
  });
  
