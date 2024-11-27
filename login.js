document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form's default submission behavior
  
    let username = document.getElementById("username");
    let password = document.getElementById("password");
  
    if (username.value === "" || password.value === "") {
      alert("Ensure you input a value in both fields!");
    } else {
      alert("You are now signed up and logged in!");
    }
  
    console.log(
      `New member has a username of ${username.value} and password of ${password.value}`
    );
  
    username.value = "";
    password.value = "";
  });
  