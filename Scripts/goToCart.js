var show = JSON.parse(localStorage.getItem("in_cart"));
function kre(data) {
  var parent = document.querySelector(".container_items_cart");
  parent.innerHTML = "";
  data.forEach(function (el) {
    var item_div = document.createElement("div");
    item_div.setAttribute("class", "item_div");

    var div1 = document.createElement("div");
    div1.setAttribute("class", "div1");

    var img_item = document.createElement("img");
    img_item.src = `${el.image}`;
    img_item.setAttribute("class", "img_item");

    var div2 = document.createElement("div");
    div2.setAttribute("class", "div2");

    var para = document.createElement("p");
    para.innerHTML = `${el.text}`;
    para.setAttribute("class", "para_item");

    var divw = document.createElement("div");
    divw.setAttribute("class", "white");

    var init = document.createElement("span");
    init.innerHTML = `<b class="inner_price">&#8377 ${el.discprice}</b>`;

    var init1 = document.createElement("span");
    init1.setAttribute("class", "inner_price1");
    init1.innerHTML = `&#8377 ${el.price}`;

    var green = document.createElement("span");
    green.setAttribute("class", "green");
    green.innerHTML = `${el.discount}`;

    let plus_minus = document.createElement("div");
    plus_minus.setAttribute("class", "plus_minus");

    let small = document.createElement("div");
    small.setAttribute("class", "small");

    let remove = document.createElement("div");
    remove.setAttribute("class", "remove");
    remove.onclick = function () {
      del(el);
    };

    let minus = document.createElement("img");
    minus.src =
      "https://img7.hkrtcdn.com/react/static/media/loyalty/minus-circle.svg";
    minus.setAttribute("class", "small_1");
    minus.onclick = function () {
      sub(el);
    };

    let ins_small = document.createElement("div");
    ins_small.setAttribute("class", "ins_small");
    ins_small.innerHTML = `${el.count}`;

    let plus = document.createElement("img");
    plus.src = "https://img9.hkrtcdn.com/react/static/media/loyalty/plus-1.svg";
    plus.setAttribute("class", "small_2");
    plus.onclick = function () {
      add(el);
    };

    let img_3 = document.createElement("img");
    img_3.src =
      "https://img10.hkrtcdn.com/react/static/media/loyalty/remove-1.svg";

    plus_minus.append(small, remove);

    small.append(minus, ins_small, plus);

    remove.append(img_3);

    divw.append(init, init1, green);

    div2.append(para, divw);

    div1.append(img_item);

    item_div.append(div1, div2, plus_minus);
    parent.append(item_div);
  });
}
kre(show);
// show.forEach(function (el) {
//   var item_div = document.createElement("div");
//   item_div.setAttribute("class", "item_div");

//   var div1 = document.createElement("div");
//   div1.setAttribute("class", "div1");

//   var img_item = document.createElement("img");
//   img_item.src = `${el.image}`;
//   img_item.setAttribute("class", "img_item");

//   var div2 = document.createElement("div");
//   div2.setAttribute("class", "div2");

//   var para = document.createElement("p");
//   para.innerHTML = `${el.text}`;
//   para.setAttribute("class", "para_item");

//   var divw = document.createElement("div");
//   divw.setAttribute("class", "white");

//   var init = document.createElement("span");
//   init.innerHTML = `<b class="inner_price">&#8377 ${el.discprice}</b>`;

//   var init1 = document.createElement("span");
//   init1.setAttribute("class", "inner_price1");
//   init1.innerHTML = `&#8377 ${el.price}`;

//   var green = document.createElement("span");
//   green.setAttribute("class", "green");
//   green.innerHTML = `${el.discount}`;

//   let plus_minus = document.createElement("div");
//   plus_minus.setAttribute("class", "plus_minus");

//   let small = document.createElement("div");
//   small.setAttribute("class", "small");

//   let remove = document.createElement("div");
//   remove.setAttribute("class", "remove");
//   remove.onclick=function(){
//     del(el);
//   }

//   let minus=document.createElement("img");
//   minus.src = "https://img7.hkrtcdn.com/react/static/media/loyalty/minus-circle.svg";
//   minus.setAttribute("class","small_1");
//   minus.onclick=function(){
//     sub(el);
//   }

//   let ins_small = document.createElement("div");
//   ins_small.setAttribute("class", "ins_small");
//   ins_small.innerHTML=`1`;

//   let plus=document.createElement("img");
//   plus.src = "https://img9.hkrtcdn.com/react/static/media/loyalty/plus-1.svg";
//   plus.setAttribute("class","small_2");
//   plus.onclick=function(){
//     add(el);
//   }

//   let img_3=document.createElement("img");
//   img_3.src = "https://img10.hkrtcdn.com/react/static/media/loyalty/remove-1.svg";

//      plus_minus.append(small, remove)

//      small.append(minus, ins_small, plus);

//      remove.append(img_3);

//   divw.append(init, init1, green);

//   div2.append(para, divw);

//   div1.append(img_item);

//   item_div.append(div1, div2,plus_minus);
//   parent.append(item_div);
// });

function add(el) {
  var get = document.querySelectorAll(".ins_small");
  var kol = JSON.parse(localStorage.getItem("in_cart"));
  for (var i = 0; i < kol.length; i++) {
    if (el.text == kol[i].text) {
      var k = i;
    }
  }
  el.count++;
  get[k].innerText = `${el.count}`;
  kol[k] = el;
  kol = localStorage.setItem("in_cart", JSON.stringify(kol));

  function dikh() {
    kol = JSON.parse(localStorage.getItem("in_cart"));

    let pay = document.querySelector(".payment");
    var sum_dis = 0;
    for (var i = 0; i < kol.length; i++) {
      sum_dis = sum_dis + Number(kol[i].discprice) * kol[i].count;
    }
    let hprice = document.querySelector(".hp_2");
    hprice.innerHTML = `&#8377 ${sum_dis}`;
    pay.innerHTML = `Proceed to pay &#8377 ${sum_dis}`;

    var sum_ac = 0;
    for (var i = 0; i < kol.length; i++) {
      sum_ac = sum_ac + Number(kol[i].price) * kol[i].count;
    }
    let tot = document.querySelector(".total_2");
    tot.innerHTML = `&#8377 ${sum_ac}`;

    let disc = document.querySelector(".d_2");
    disc.innerHTML = `-&#8377 ${sum_ac - sum_dis}`;

    let ps = document.querySelector(".ps_2");
    ps.innerHTML = `-&#8377 ${sum_ac - sum_dis}`;

    let tp = document.querySelector(".tp_2");
    tp.innerHTML = `&#8377 ${sum_dis}`;

    let ts = document.querySelector(".ts_2");
    ts.innerHTML = `&#8377 ${sum_ac - sum_dis}`;

    let take = document.getElementById("take");
    take.innerHTML = `${sum_dis}`;
  }

  dikh();
}
function sub(el) {
  kol = JSON.parse(localStorage.getItem("in_cart"));
  var get = document.querySelectorAll(".ins_small");
  for (var j = 0; j < show.length; j++) {
    if (el.text == show[j].text) {
      var q = j;
    }
  }
  el.count--;
  get[q].innerHTML = `${el.count}`;
  kol[q] = el;
  kol = localStorage.setItem("in_cart", JSON.stringify(kol));

  function dikh() {
    kol = JSON.parse(localStorage.getItem("in_cart"));

    let pay = document.querySelector(".payment");
    var sum_dis = 0;
    for (var i = 0; i < kol.length; i++) {
      sum_dis = sum_dis + Number(kol[i].discprice) * kol[i].count;
    }
    let hprice = document.querySelector(".hp_2");
    hprice.innerHTML = `&#8377 ${sum_dis}`;
    pay.innerHTML = `Proceed to pay &#8377 ${sum_dis}`;

    var sum_ac = 0;
    for (var i = 0; i < kol.length; i++) {
      sum_ac = sum_ac + Number(kol[i].price) * kol[i].count;
    }
    let tot = document.querySelector(".total_2");
    tot.innerHTML = `&#8377 ${sum_ac}`;

    let disc = document.querySelector(".d_2");
    disc.innerHTML = `-&#8377 ${sum_ac - sum_dis}`;

    let ps = document.querySelector(".ps_2");
    ps.innerHTML = `-&#8377 ${sum_ac - sum_dis}`;

    let tp = document.querySelector(".tp_2");
    tp.innerHTML = `&#8377 ${sum_dis}`;

    let ts = document.querySelector(".ts_2");
    ts.innerHTML = `&#8377 ${sum_ac - sum_dis}`;

    let take = document.getElementById("take");
    take.innerHTML = `${sum_dis}`;
  }
  dikh();
}
function del(el) {
  var kol = JSON.parse(localStorage.getItem("in_cart"));

  for (var i = 0; i < kol.length; i++) {
    if (el.text == kol[i].text) {
      var z = i;
    }
  }
  kol.splice(z, 1);
  kre(kol);
  var target_mycart = document.getElementById("target_mycart");
  target_mycart.innerHTML = `(${kol.length})`;
  kol = localStorage.setItem("in_cart", JSON.stringify(kol));
  function dikh() {
    kol = JSON.parse(localStorage.getItem("in_cart"));

    let pay = document.querySelector(".payment");
    var sum_dis = 0;
    for (var i = 0; i < kol.length; i++) {
      sum_dis = sum_dis + Number(kol[i].discprice) * kol[i].count;
    }
    let hprice = document.querySelector(".hp_2");
    hprice.innerHTML = `&#8377 ${sum_dis}`;
    pay.innerHTML = `Proceed to pay &#8377 ${sum_dis}`;

    var sum_ac = 0;
    for (var i = 0; i < kol.length; i++) {
      sum_ac = sum_ac + Number(kol[i].price) * kol[i].count;
    }
    let tot = document.querySelector(".total_2");
    tot.innerHTML = `&#8377 ${sum_ac}`;

    let disc = document.querySelector(".d_2");
    disc.innerHTML = `-&#8377 ${sum_ac - sum_dis}`;

    let ps = document.querySelector(".ps_2");
    ps.innerHTML = `-&#8377 ${sum_ac - sum_dis}`;

    let tp = document.querySelector(".tp_2");
    tp.innerHTML = `&#8377 ${sum_dis}`;

    let ts = document.querySelector(".ts_2");
    ts.innerHTML = `&#8377 ${sum_ac - sum_dis}`;

    let take = document.getElementById("take");
    take.innerHTML = `${sum_dis}`;
  }

  dikh();
}

function payments(data) {
  let pay = document.querySelector(".payment");
  var sum_dis = 0;
  for (var i = 0; i < data.length; i++) {
    sum_dis = sum_dis + Number(data[i].discprice) * data[i].count;
  }
  let hprice = document.querySelector(".hp_2");
  hprice.innerHTML = `&#8377 ${sum_dis}`;
  pay.innerHTML = `Proceed to pay &#8377 ${sum_dis}`;

  var sum_ac = 0;
  for (var i = 0; i < show.length; i++) {
    sum_ac = sum_ac + Number(data[i].price) * data[i].count;
  }
  let tot = document.querySelector(".total_2");
  tot.innerHTML = `&#8377 ${sum_ac}`;

  let disc = document.querySelector(".d_2");
  disc.innerHTML = `-&#8377 ${sum_ac - sum_dis}`;

  let ps = document.querySelector(".ps_2");
  ps.innerHTML = `-&#8377 ${sum_ac - sum_dis}`;

  let tp = document.querySelector(".tp_2");
  tp.innerHTML = `&#8377 ${sum_dis}`;

  let ts = document.querySelector(".ts_2");
  ts.innerHTML = `&#8377 ${sum_ac - sum_dis}`;

  let take = document.getElementById("take");
  take.innerHTML = `${sum_dis}`;
}
kol = JSON.parse(localStorage.getItem("in_cart"));
var target_mycart = document.getElementById("target_mycart");
target_mycart.innerHTML = `(${kol.length})`;
payments(kol);

let proceed_to_delivery_address = document.getElementById(
  "proceed-to-delivery-address"
);

proceed_to_delivery_address.addEventListener("click", proceed_to_login);
function proceed_to_login() {
  window.location.href = "./healthkartSignUp.html";
}
var bod = document.querySelector(".logo");
bod.addEventListener("click", body);
function body() {
  window.location.href = "./index.html";
}
