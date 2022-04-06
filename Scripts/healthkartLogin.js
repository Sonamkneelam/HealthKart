let healthkart_signUp = document.getElementById("healthkart-signUp");
let login_close_button = document.querySelector(
  ".login-right-section-close-button"
);
let healthkart_login_form = document.querySelector(".healthkart-login-form");
let healthkart_login_form_button = document.querySelector(
  ".healthkart-login-form-button"
);

function signUpHealthkart() {
  window.location.href = "./healthkartSignUp.html";
}

function close_page() {
  window.location.href = "./gotocart.html";
}

function healthkart_login(e) {
  e.preventDefault();
  let loginAccepted = false;
  let healthkart_login_details = JSON.parse(
    localStorage.getItem("healthkartSignUpData")
  );

  let email_healthkart = healthkart_login_form.email_healthkart.value;
  console.log("email_healthkart:", email_healthkart);

  let password_healthkart = healthkart_login_form.password_healthkart.value;
  console.log("password_healthkart:", password_healthkart);

  for (let i = 0; i < healthkart_login_details.length; i++) {
    if (
      email_healthkart == healthkart_login_details[i].email_healthkart &&
      password_healthkart == healthkart_login_details[i].password_healthkart
    ) {
      loginAccepted = true;
      alert("Login Successful");
      console.log("successful");

      window.location.href = "./healthkartAddressPage.html";
      break;
    }
  }

  if (loginAccepted == false) {
    alert("Wrong Credentials");
  }
}

login_close_button.addEventListener("click", close_page);
healthkart_login_form_button.addEventListener("click", healthkart_login);
healthkart_signUp.addEventListener("click", signUpHealthkart);
