let healthkart_delivery_address = JSON.parse(
  localStorage.getItem("healthkart_address_data")
);
console.log("healthkart_delivery_address:", healthkart_delivery_address);
let current_delivery_address =
  healthkart_delivery_address[healthkart_delivery_address.length - 1];

function showDeliveryAddress() {
  let pin_state = document.getElementById("pin-state");
  pin_state.innerHTML = `Delivery at <b>${current_delivery_address.healthkart_pincode},
     ${current_delivery_address.healthkart_state} </b>`;
  console.log("pin_state:", pin_state);

  let user_name = document.getElementById("user-name");
  user_name.innerHTML = `${current_delivery_address.healthkart_name}`;

  let address_number = document.getElementById("address-number");
  address_number.innerHTML = `${current_delivery_address.healthkart_delivery_address}
    ${current_delivery_address.healthkart_city} , ${current_delivery_address.healthkart_state} 
    Phone : ${current_delivery_address.healthkart_mobile_num}`;
}
showDeliveryAddress();

let phonepe = document.getElementById("phonepe");
let normalupi = document.getElementById("normalupi");
phonepe.addEventListener("click", function () {
  if (phonepe.checked == true) {
    let data = phonepe.parentElement.parentElement;
    data.style.maxHeight = "120px";
  }

  let data1 = normalupi.parentElement.parentElement;
  data1.style.maxHeight = "50px";
});

normalupi.addEventListener("click", function () {
  if (normalupi.checked == true) {
    let data = normalupi.parentElement.parentElement;
    data.style.maxHeight = "120px";
  }
  let data1 = phonepe.parentElement.parentElement;
  data1.style.maxHeight = "50px";
});

function changeAdress() {
  let pd = document.getElementById("pin-state");
  let un = document.getElementById("user-name");
  let an = document.getElementById("address-number");
  let pdp = prompt("give pin code and state");
  let unp = prompt("give name");
  let ap = prompt("give adress");
  let np = prompt("give number");
  pd.innerHTML = `Delivery at ${pdp}`;
  un.innerHTML = unp;
  an.innerHTML = `${ap},Phone:${np}`;
}

function addoptions() {
  let monthoptions = document.getElementById("monthoptions");
  //adding 12 options for months
  for (let i = 1; i <= 12; i++) {
    let optionn = document.createElement("option");
    optionn.value = i;
    optionn.textContent = i;
    monthoptions.append(optionn);
  }

  let yearoptions = document.getElementById("yearoptions");
  for (let i = 21; i <= 39; i++) {
    let optionn = document.createElement("option");
    optionn.value = `20${i}`;
    optionn.textContent = `20${i}`;
    yearoptions.append(optionn);
  }
}
addoptions();

let cod = document.getElementById("cod");
let paymentdivs = document.getElementById("payment-divs");
let data5 = paymentdivs.children;
cod.addEventListener("click", function () {
  for (i = 0; i < data5.length; i++) {
    data5[i].style.backgroundColor = "white";
    data5[i].style.borderRight = "1px solid black";
  }
  cod.style.backgroundColor = "rgb(242,255,255)";
  cod.style.borderRight = "4px solid rgb(0,191,191)";
  let cods = document.getElementById("cods");
  cods.style.display = "block";
  let datap = cods.parentElement;
  let data = datap.children;
  for (i = 0; i < data.length; i++) {
    if (i != 0) {
      data[i].style.display = "none";
    }
  }
});
let datap = cods.parentElement;
let data = datap.children;
cod.style.backgroundColor = "rgb(242,255,255)";
cod.style.borderRight = "4px solid rgb(0,191,191)";
for (i = 0; i < data.length; i++) {
  if (i != 0) {
    data[i].style.display = "none";
  }
}
let dc = document.getElementById("dc");
dc.addEventListener("click", function () {
  for (i = 0; i < data5.length; i++) {
    data5[i].style.backgroundColor = "white";
    data5[i].style.borderRight = "1px solid black";
  }
  dc.style.backgroundColor = "rgb(242,255,255)";
  dc.style.borderRight = "5px solid rgb(0,191,191)";
  let dcs = document.getElementById("dcs");
  dcs.style.display = "block";
  let datap = dcs.parentElement;
  let data = datap.children;
  for (i = 0; i < data.length; i++) {
    if (i != 1) {
      data[i].style.display = "none";
    }
  }
});
let puu = document.getElementById("puu");
puu.addEventListener("click", function () {
  for (i = 0; i < data5.length; i++) {
    data5[i].style.backgroundColor = "white";
    data5[i].style.borderRight = "1px solid black";
  }
  puu.style.backgroundColor = "rgb(242,255,255)";
  puu.style.borderRight = "5px solid rgb(0,191,191)";
  let puus = document.getElementById("puus");
  puus.style.display = "block";
  let datap = puus.parentElement;
  let data = datap.children;
  for (i = 0; i < data.length; i++) {
    if (i != 2) {
      data[i].style.display = "none";
    }
  }
});

let tot_pay = document.getElementById("tot_pay");
let hp_price = document.getElementById("hp_price");
let di_price = document.getElementById("di_price");
let tp_price = document.getElementById("tp_price");

let in_data = JSON.parse(localStorage.getItem("in_cart"));
var sum_dis = 0;
for (var i = 0; i < in_data.length; i++) {
  sum_dis = sum_dis + Number(in_data[i].discprice) * in_data[i].count;
}
var sum_ac = 0;
for (var i = 0; i < in_data.length; i++) {
  sum_ac = sum_ac + Number(in_data[i].price) * in_data[i].count;
}
hp_price.innerHTML = `${sum_dis}`;
tot_pay.innerHTML = `${sum_ac}`;
di_price.innerHTML = `-${sum_ac - sum_dis}`;
tp_price.innerHTML = `${sum_dis}`;
let cod_tot = document.getElementById("cod_tot");
cod_tot.innerHTML = `${Number(sum_dis)}`;
let cod_tot1 = document.getElementById("cod_tot1");
cod_tot1.innerHTML = `&#8377 ${Number(sum_dis) + Number(30)}`;

let bhim_pay = document.getElementById("bhim-pay");
let phonePe_pay = document.getElementById("phonePe-pay");

bhim_pay.innerHTML = `&#8377 ${sum_dis}`;
phonePe_pay.innerHTML = ` ${sum_dis}`;

let cashDelivery = document.getElementById("cashDelivery");
cashDelivery.addEventListener("click", paymentthroughcod);
function paymentthroughcod() {
  window.location.href = "./successful.html";
}
