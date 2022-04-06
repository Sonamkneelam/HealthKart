let signUp_close_button = document.querySelector(
  ".signUp-right-section-close-button"
);
let healthkart_login = document.getElementById("healthkart-login");
let healthkart_signUp_form = document.querySelector(".healthkart-signUp-form");
let healthkart_signUp_form_button = document.querySelector(
  ".healthkart-signUp-form-button"
);

function loginHealthkart() {
  window.location.href = "./healthkartLogin.html";
}

function close_page() {
  window.location.href = "./gotocart.html";
}
function healthkart_signUp(e) {
  e.preventDefault();

  let username_healthkart = healthkart_signUp_form.username_healthkart.value;
  console.log("username_healthkart:", username_healthkart);

  let email_healthkart = healthkart_signUp_form.email_healthkart.value;
  console.log("email_healthkart:", email_healthkart);

  let password_healthkart = healthkart_signUp_form.password_healthkart.value;
  console.log("password_healthkart:", password_healthkart);

  if (
    username_healthkart == "" ||
    username_healthkart == null ||
    email_healthkart == "" ||
    email_healthkart == null ||
    password_healthkart == "" ||
    password_healthkart == null
  ) {
    alert("All details are required");
  } else {
    healthkart_signUp_data(
      username_healthkart,
      email_healthkart,
      password_healthkart
    );
  }
}

function healthkart_signUp_data(
  username_healthkart,
  email_healthkart,
  password_healthkart
) {
  let healthkart_signUp_details = {
    username_healthkart,
    email_healthkart,
    password_healthkart,
  };

  let healthkartSignUpData;
  let nameOrEmail = false;

  healthkartSignUpData = localStorage.getItem("healthkartSignUpData");

  if (healthkartSignUpData == null) {
    healthkartSignUpData = [];
  } else {
    healthkartSignUpData = JSON.parse(
      localStorage.getItem("healthkartSignUpData")
    );
    healthkartSignUpData.forEach(function (el) {
      if (
        healthkart_signUp_details.username_healthkart ==
          el.username_healthkart ||
        healthkart_signUp_details.email_healthkart == el.email_healthkart
      ) {
        nameOrEmail = true;
        alert("User Already Exists! Try dfferent Username or Email ID");
      }
    });
  }

  if (nameOrEmail == false) {
    healthkartSignUpData.push(healthkart_signUp_details);
    localStorage.setItem(
      "healthkartSignUpData",
      JSON.stringify(healthkartSignUpData)
    );
    alert("Sign Up Successful. Login to vist homepage!");
    loginHealthkart();
  }
}

signUp_close_button.addEventListener("click", close_page);
healthkart_login.addEventListener("click", loginHealthkart);
healthkart_signUp_form_button.addEventListener("click", healthkart_signUp);
