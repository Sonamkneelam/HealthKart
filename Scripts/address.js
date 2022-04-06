let address_form = document.querySelector(".address-form");

let address_button = document.querySelector(".address-button");
address_button.addEventListener("click", healthkart_delivery_address);

function healthkart_delivery_address(e) {
  e.preventDefault();
  let healthkart_name = address_form.address_name.value;
  console.log("healthkart_name:", healthkart_name);

  let healthkart_mobile_num = address_form.mobile_num.value;
  console.log("healthkart_mobile_num:", healthkart_mobile_num);

  let healthkart_alternate_num = address_form.alternate_num.value;
  console.log("healthkart_alternate_num:", healthkart_alternate_num);

  let healthkart_delivery_address = address_form.delivery_address.value;
  console.log("healthkart_delivery_address:", healthkart_delivery_address);

  let healthkart_landmark = address_form.landmark.value;
  console.log("healthkart_landmark:", healthkart_landmark);

  let healthkart_pincode = address_form.pincode.value;
  console.log("healthkart_pincode:", healthkart_pincode);

  let healthkart_state = address_form.state.value;
  console.log("healthkart_state:", healthkart_state);

  let healthkart_city = address_form.city.value;
  console.log("healthkart_city:", healthkart_city);

  if (
    healthkart_name == "" ||
    healthkart_name == null ||
    healthkart_mobile_num == "" ||
    healthkart_mobile_num == null ||
    healthkart_mobile_num.length != 10 ||
    healthkart_delivery_address == "" ||
    healthkart_delivery_address == null ||
    healthkart_pincode == "" ||
    healthkart_pincode == null ||
    healthkart_state == "" ||
    healthkart_state == null ||
    healthkart_pincode.length != 6 ||
    healthkart_city == "" ||
    healthkart_city == null
  ) {
    alert("All Details are Required");
  } else {
    healthkart_add_delivery_address(
      healthkart_name,
      healthkart_mobile_num,
      healthkart_alternate_num,
      healthkart_delivery_address,
      healthkart_landmark,
      healthkart_pincode,
      healthkart_state,
      healthkart_city
    );
  }
}

function healthkart_add_delivery_address(
  healthkart_name,
  healthkart_mobile_num,
  healthkart_alternate_num,
  healthkart_delivery_address,
  healthkart_landmark,
  healthkart_pincode,
  healthkart_state,
  healthkart_city
) {
  let healthkart_address_details = {
    healthkart_name,
    healthkart_mobile_num,
    healthkart_alternate_num,
    healthkart_delivery_address,
    healthkart_landmark,
    healthkart_pincode,
    healthkart_state,
    healthkart_city,
  };

  let healthkart_address_data = localStorage.getItem("healthkart_address_data");

  if (healthkart_address_data == null) {
    healthkart_address_data = [];
  } else {
    healthkart_address_data = JSON.parse(
      localStorage.getItem("healthkart_address_data")
    );
  }

  healthkart_address_data.push(healthkart_address_details);
  localStorage.setItem(
    "healthkart_address_data",
    JSON.stringify(healthkart_address_data)
  );
  alert("Added");
  window.location.href = "./payment.html";
}
