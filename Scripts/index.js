let data_flash = [
  {
    flash:
      "https://img10.hkrtcdn.com/react/static/media/common/variant/flash-icon.svg",
    image: "https://img4.hkrtcdn.com/13528/prd_1352733_c_s.jpg",
    checklist:
      "https://img10.hkrtcdn.com/react/static/media/common/variant/wishlist/heart_plus.svg",
    discount: "21% off",
    text: "MuscleBlaze Gold Gainer XXL, 6 lb Chocolate Bliss",
    price: `${4149}`,
    discprice: `${3249}`,
    premprice: `${3152}`,
    review: `${4.7} (155)`,
    count: 1,
  },
  {
    flash:
      "https://img10.hkrtcdn.com/react/static/media/common/variant/flash-icon.svg",
    image: "https://img10.hkrtcdn.com/12059/prd_1205819_c_s.jpg",
    checklist:
      "https://img10.hkrtcdn.com/react/static/media/common/variant/wishlist/heart_plus.svg",
    discount: "11% off",
    text: "MuscleBlaze BCAA Pro, 2 Piece(s)/Pack 16 Servings",
    price: `${1149}`,
    discprice: `${894}`,
    premprice: `${867}`,
    review: `${4.6} (969)`,
    count: 1,
  },
  {
    flash:
      "https://img10.hkrtcdn.com/react/static/media/common/variant/flash-icon.svg",
    image:
      "https://img8.hkrtcdn.com/14648/prd_1464767-HealthKart-Omega-3-1000mg-with-180mg-EPA-and-120mg-DHA-90-softgels_c_s.jpg",
    checklist:
      "https://img10.hkrtcdn.com/react/static/media/common/variant/wishlist/heart_plus.svg",
    discount: "19% off",
    text: "HealthKart Omega 3 1000mg with 180mg EPA and 120mg DHA, 90 softgels",
    price: `${1000}`,
    discprice: `${525}`,
    premprice: `${509}`,
    review: `${4.8} (429)`,
    count: 1,
  },
  {
    flash:
      "https://img10.hkrtcdn.com/react/static/media/common/variant/flash-icon.svg",
    image: "https://img2.hkrtcdn.com/11832/prd_1183161_c_s.jpg",
    checklist:
      "https://img10.hkrtcdn.com/react/static/media/common/variant/wishlist/heart_plus.svg",
    discount: "24% off",
    text: "ON (Optimum Nutrition) Gold Standard 100% Whey Protien, 5 lb, Double Rich Chocolate",
    price: `${7699}`,
    discprice: `${6544}`,
    premprice: `${5099}`,
    review: `${4.5} (2104)`,
    count: 1,
  },
];

localStorage.setItem("healthKart-data", JSON.stringify(data_flash));

let widget_container = document.querySelector(".widget-container");
let benefitCount = 0;

data_flash.forEach(function (e) {
  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "item-variant");
  benefitCount++;

  let hover_div = document.getElementById("hidden-benefits" + benefitCount);
  hover_div.style.display = "block";

  let productImage = document.createElement("img");
  productImage.setAttribute("class", "hover-hidden-image");
  productImage.src = `${e.image}`;

  let discount = document.createElement("span");
  discount.innerHTML = `${e.discount}`;
  discount.setAttribute("class", "variant-offer-home");

  let variant_info = document.createElement("div");
  variant_info.setAttribute("class", "variant-info");

  let variant_name = document.createElement("div");
  variant_name.setAttribute("class", "variant-name");
  variant_name.innerHTML = `${e.text}`;

  let variant_summary = document.createElement("div");
  variant_summary.setAttribute("class", "variant-summary");

  let variant_rating = document.createElement("span");
  variant_rating.setAttribute("class", "variant-rating");

  let stars = document.createElement("img");
  stars.src =
    "http://anastasiofence.com/wp-content/uploads/2017/09/5-Star-Rating.png";

  let review_count = document.createElement("div");
  review_count.innerHTML = `${e.review}`;
  review_count.setAttribute("class", "review-count");

  let sale_price = document.createElement("span");
  sale_price.setAttribute("class", "sale-price");
  sale_price.innerHTML = `&#8377 ${e.discprice}`;

  let old_price = document.createElement("span");
  old_price.setAttribute("class", "old-price");
  old_price.innerHTML = `&#8377 ${e.price}`;

  let btn_div = document.createElement("div");
  btn_div.setAttribute("class", "homePage-btn");

  let add_to_cart_button = document.createElement("button");
  add_to_cart_button.setAttribute("class", "add-to-cart");

  add_to_cart_button.innerHTML = `<img src="https://img2.hkrtcdn.com/react/static/media/common/new_cart.svg"
                                    alt="cartImage" class="add-to-cart-image">ADD`;

  add_to_cart_button.onclick = function () {
    cartit(e);
  };

  let premium_price_container = document.createElement("div");
  premium_price_container.setAttribute("class", "premium-price-container");

  let premium_div = document.createElement("div");
  premium_div.innerHTML = `Premiun Price : <b>&#8377 ${e.premprice}</b>`;

  let locked_premium = document.createElement("div");
  locked_premium.setAttribute("class", "locked-premium");

  let locked_premium_image = document.createElement("img");
  locked_premium_image.src =
    "https://img2.hkrtcdn.com/react/static/media/common/locked_circle_1.svg";

  locked_premium.append(locked_premium_image);
  premium_price_container.append(premium_div, locked_premium);
  btn_div.append(add_to_cart_button);
  variant_rating.append(stars);
  variant_summary.append(
    variant_rating,
    review_count,
    sale_price,
    old_price,
    btn_div
  );
  variant_info.append(variant_name, variant_summary);
  mainDiv.append(
    hover_div,
    productImage,
    discount,
    variant_info,
    premium_price_container
  );
  widget_container.append(mainDiv);
});

function cartit(e) {
  alert("Product Added");
  let myadded;
  myadded = localStorage.getItem("in_cart");
  if (myadded == null) {
    myadded = [];
  } else {
    myadded = JSON.parse(localStorage.getItem("in_cart"));
  }
  myadded.push(e);
  var number_cartip = document.getElementById("number_cartip");
  //  var kola = JSON.parse(localStorage.getItem("in_cart"));
  number_cartip.innerHTML = `${myadded.length}`;
  localStorage.setItem("in_cart", JSON.stringify(myadded));
}

let location_to_cart = document.getElementById("location-to-cart");
location_to_cart.addEventListener("click", locate_to_cart);

function locate_to_cart() {
  window.location.href = "./gotocart.html";
}

const track = document.querySelector(".carousel_track");

const slides = Array.from(track.children);
//console.log("slides:", slides);

const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav = document.querySelector(".carousel_nav");

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log("slideWidth:", slideWidth);

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// When I click left, move slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  // console.log("currentSlide:", currentSlide);
  const prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// When I click right, move slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  //console.log("currentSlide:", currentSlide);
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

setInterval(function () {
  const currentSlide = track.querySelector(".current-slide");
  //console.log("currentSlide:", currentSlide);
  const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);

  if (nextIndex == 10) return;
}, 4500);

var cart = document.getElementById("c55");
var cartlist = document.getElementById("cart-list");
cart.addEventListener("mouseover", function () {
  cartlist.style.display = "block";
});
cart.addEventListener("mouseout", function () {
  cartlist.style.display = "none";
});

var consult = document.getElementById("consult");
var bestsellers = document.getElementById("bestsellers");
var consultlist = (c = document.getElementById("consult-list"));
var bestsellerslist = document.getElementById("bestsellers-list");
var offers = document.getElementById("offers");
var offerslist = document.getElementById("offers-list");
var goal = document.getElementById("goal");
var goallist = document.getElementById("goal-list");
var gender = document.getElementById("gender");
var genderlist = document.getElementById("gender-list");
var brand = document.getElementById("brand");
var brandlist = document.getElementById("brand-list");
var category = document.getElementById("category");
var categorylist = document.getElementById("category-list");
consult.addEventListener("mouseover", function () {
  consultlist.style.display = "block";
});
consult.addEventListener("mouseout", function () {
  consultlist.style.display = "none";
});
bestsellers.addEventListener("mouseover", function () {
  bestsellerslist.style.display = "flex";
});
bestsellers.addEventListener("mouseout", function () {
  bestsellerslist.style.display = "none";
});
goal.addEventListener("mouseover", function () {
  goallist.style.display = "block";
});
goal.addEventListener("mouseout", function () {
  goallist.style.display = "none";
});
gender.addEventListener("mouseover", function () {
  genderlist.style.display = "block";
});
gender.addEventListener("mouseout", function () {
  genderlist.style.display = "none";
});
offers.addEventListener("mouseover", function () {
  offerslist.style.display = "block";
});
offers.addEventListener("mouseout", function () {
  offerslist.style.display = "none";
});
brand.addEventListener("mouseover", function () {
  brandlist.style.display = "flex";
});
brand.addEventListener("mouseout", function () {
  brandlist.style.display = "none";
});
category.addEventListener("mouseover", function () {
  categorylist.style.display = "flex";
});
category.addEventListener("mouseout", function () {
  categorylist.style.display = "none";
});
var categorylistchild2 = document.getElementById("category-list-child2");
var sportsnutrition = document.getElementById("sports-nutrition");
var vitamins = document.getElementById("vitamins");
var ayurvedha = document.getElementById("ayurvedha");
var health = document.getElementById("health");
var fitness = document.getElementById("fitness");
var wellness = document.getElementById("wellness");
var service = document.getElementById("service");
var fas = document.querySelectorAll(".fa-greater-than");
sportsnutrition.addEventListener("mouseover", function () {
  fas[0].style.color = "rgb(0,191,191)";
  let change1 = document.createElement("div");
  change1 = `
                <div>
                        <p>Protiens</p>
                        <p>Whey Protiens</p>
                        <p>Beginners Protiens</p>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        <p>Plant Protiens</p>
                        <p>Protien for Women</p>
                        <p>Protien blends</p>
                        <p>Casein protiens</p>
                        <p>Soy Protiens</p>
               </div>
            <div>
                <p>Gainers</p>
                               <p>Weight Gainers</p>
                               <p>Mass Gainers</p>
                               <p>Herbal Weight Gainers</p>
                </div>
                          <div>
                               <p>Protein Foods </p>
                               <p>Protein Cookies</p>
                               <p>Peanut Butter</p>
                           </div>
                           <div>
                               <p>Pre/Post</p>
                               <p>Pre-Workout</p>
                               <p>Creatine</p>
                               <p>BCAA's</p>
                               <p>Carb Blends</p>
                               <p>Electrolytes</p>
                               <p>Nitric Oxide</p>
                               <p>Other supports</p>
                               <p>Ciruline Malate</p>
                           </div>
                           <div>
                               <p>Workout</p>
                               <p>Consult workers</p>
                               <p>L carmitine</p>
                               <p>Multivatamins</p>
                               <p>body Building</p>
                               <p>Pre Hormone</p>
                               <p>ZMA</p>
                           </div>`;
  categorylistchild2.innerHTML = change1;
  categorylistchild2.style.display = "flex";
});
vitamins.addEventListener("mouseover", function () {
  fas[1].style.color = "rgb(0,191,191)";
  categorylistchild2.innerHTML = `
         <div>
                    <div>
                        <p> Blends</p>
                        <p>Casein protiens</p>
                        <p>Soy Protiens</p>
                        <p>Plant Protiens</p>
                        
                        </div>
                        <div class="gap-margin">
                        <p>Omega</p>
                        <p>Beginners Protiens</p>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        </div>
            </div>
            <div>
               <p onclick="(location.href='multivitamins.html')" class="cursorr">Multivitamins</p>
                               <p>Weight Gainers</p>
                               <p>Mass Gainers</p>
                               <p>Herbal Weight Gainers</p>
                               <p>Casein protiens</p>
                               <p>Soy Protiens</p>
                </div>
                          <div>
                               <p>Protein Foods </p>
                               <p>Protein Cookies</p>
                               <p>Peanut Butter</p>
                               <p>Protein Foods </p>
                               <p>Protein Cookies</p>
                               <p>Peanut Butter</p>
                               <p>Protein Foods </p>
                               <p>Protein Cookies</p>
                               <p>Peanut Butter</p>
                               
                           </div>
                           <div>
                               <p>Pre/Post</p>
                               <p>Pre-Workout</p>
                               <p>Creatine</p>
                               <p>BCAA's</p>
                               <p>Carb Blends</p>
                               <p>Electrolytes</p>
                               <p>Nitric Oxide</p>
                               
                           </div>
                           <div>
                               <p>Workout</p>
                               <p>Consult workers</p>
                               <p>L carmitine</p>
                               <p>Multivatamins</p>
                               <p>body Building</p>
                               <p>Pre Hormone</p>
                               
                           </div>
         `;
});
ayurvedha.addEventListener("mouseover", function () {
  fas[2].style.color = "rgb(0,191,191)";
  categorylistchild2.innerHTML = `
         <div>
                    <div>
                        <p> Blends</p>
                        <p>Casein protiens</p>
                        <p>Soy Protiens</p>
                        <p>Plant Protiens</p>
                        <p>Pre Hormone</p>
                        </div>
                        <div class="gap-margin">
                        <p>Omega</p>
                        <p>Beginners Protiens</p>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        </div>
            </div>
            <div>
                    <div>
                        <p> Blends</p>
                        <p>Casein protiens</p>
                        <p>Soy Protiens</p>
                        <p>Plant Protiens</p>
                        <p>Pre Hormone</p>
                        </div>
                        <div class="gap-margin">
                        <p>Omega</p>
                        <p>Beginners Protiens</p>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        </div>
            </div>
            <div>
                    <div>
                        <p> Blends</p>
                        <p>Casein protiens</p>
                        <p>Plant Protiens</p>
                        
                        <p>Pre Hormone</p>
                        <p>Plant Protiens</p>
                        </div>
                        <div class="gap-margin">
                        <p>Omega</p>
                        <p>Beginners Protiens</p>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        </div>
            </div>
            <div>
                    <div>
                        <p> Blends</p>
                        <p>Casein protiens</p>
                        <p>Soy Protiens</p>
                        <p>Plant Protiens</p>
                        <p>Pre Hormone</p>
                        </div>
                        <div class="gap-margin">
                        <p>Omega</p>
                        <p>Beginners Protiens</p>
                        
                        </div>
            </div>
            <div>
                    <div>
                        <p> Blends</p>
                        <p>Casein protiens</p>
                        <p>Soy Protiens</p>
                        <p>Plant Protiens</p>
                        <p>Pre Hormone</p>
                        
                        </div>
                        <div class="gap-margin">
                        <p>Omega</p>
                        <p>Beginners Protiens</p>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        </div>
            </div>
            
         `;
});
health.addEventListener("mouseover", function () {
  fas[3].style.color = "rgb(0,191,191)";
  categorylistchild2.innerHTML = `
          <div>
                        <p>Protiens</p>
                        <p>Whey Protiens</p>
                        <p>Beginners Protiens</p>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        <p>Plant Protiens</p>
                        <p>Protien for Women</p>
                        <p>Protien blends</p>
                        <p>Casein protiens</p>
                        <p>Soy Protiens</p>
               </div>
            <div>
                <p>Gainers</p>
                               <p>Weight Gainers</p>
                               <p>Mass Gainers</p>
                               <p>Herbal Weight Gainers</p>
                               <p>Electrolytes</p>
                               <p>Nitric Oxide</p>
                               <p>Other supports</p>
                               <p>Ciruline Malate</p>
                </div>
                          <div>
                               <p>Protein Foods </p>
                               <p>Protein Cookies</p>
                               <p>Peanut Butter</p>
                               <p>Electrolytes</p>
                               <p>Nitric Oxide</p>
                               <p>Other supports</p>
                               <p>Ciruline Malate</p>
                           </div>
                           <div>
                               <p>Pre/Post</p>
                               <p>Pre-Workout</p>
                               <p>Creatine</p>
                               <p>BCAA's</p>
                               <p>Carb Blends</p>
                               
                           </div>
                           <div>
                               <p>Workout</p>
                               <p>Consult workers</p>
                               <p>L carmitine</p>
                               <p>Multivatamins</p>
                               <p>body Building</p>
                               <p>Pre Hormone</p>
                               <p>ZMA</p>
                               <p>Electrolytes</p>
                               <p>Nitric Oxide</p>
                               <p>Other supports</p>
                               <p>Ciruline Malate</p>
                           </div
         `;
});
fitness.addEventListener("mouseover", function () {
  fas[4].style.color = "rgb(0,191,191)";
  categorylistchild2.innerHTML = `
          <div>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        <p>Plant Protiens</p>
                        <p>Whey Protiens</p>
                        <p>Beginners Protiens</p>
                         <p>Protiens</p>
               </div>
            <div>
                <p>Gainers</p>
                               <p>Weight Gainers</p>
                               <p>Mass Gainers</p>
                               <p>Herbal Weight Gainers</p>
                               <p>Electrolytes</p>
                               <p>Nitric Oxide</p>
                               <p>Other supports</p>
                               <p>Ciruline Malate</p>
                               <p>Protien for Women</p>
                              <p>Protien blends</p>
                </div>
                          <div>
                               <p>Protein Foods </p>
                               <p>Protein Cookies</p>
                               <p>Peanut Butter</p>
                               <p>Electrolytes</p>
                               <p>Nitric Oxide</p>
                               
                           </div>
                           <div>
                               <p>Pre/Post</p>
                               <p>Pre-Workout</p>
                               <p>Creatine</p>
                               <p>BCAA's</p>
                               <p>Carb Blends</p>
                               <p>Pre/Post</p>
                               <p>Pre-Workout</p>
                               <p>Creatine</p>
                               <p>BCAA's</p>
                           </div>
                           <div>
                               <p>Workout</p>
                               <p>Consult workers</p>
                               <p>L carmitine</p>
                               <p>Multivatamins</p>
                               <p>body Building</p>
                             
                           </div
         `;
});
wellness.addEventListener("mouseover", function () {
  fas[5].style.color = "rgb(0,191,191)";
  categorylistchild2.innerHTML = `
          <div>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        <p>Plant Protiens</p>
                        <p>Whey Protiens</p>
                        <p>Beginners Protiens</p>
                         <p>Protiens</p>
                         <p>Whey Protiens</p>
                        <p>Beginners Protiens</p>
                         <p>Protiens</p>
               </div>
            <div>
                <p>Gainers</p>
                               <p>Weight Gainers</p>
                               <p>Mass Gainers</p>
                               <p>Herbal Weight Gainers</p>
                               <p>Electrolytes</p>
                               <p>Nitric Oxide</p>
                               <p>Other supports</p>
                               
                </div>
                          <div>
                               <p>Protein Foods </p>
                               <p>Protein Cookies</p>
                               <p>Peanut Butter</p>
                               <p>Electrolytes</p>
                               <p>Nitric Oxide</p>
                               <p>Ciruline Malate</p>
                               <p>Protien for Women</p>
                              <p>Protien blends</p>
                              <p>Protien for Women</p>
                              <p>Protien blends</p>
                           </div>
                           <div>
                               <p>Pre/Post</p>
                               <p>Pre-Workout</p>
                               <p>Creatine</p>
                               <p>BCAA's</p>
                               <p>Carb Blends</p>
                               <p>Pre/Post</p>
                               <p>Pre-Workout</p>
                              
                           </div>
                           <div>
                               <p>Workout</p>
                               <p>Consult workers</p>
                               <p>L carmitine</p>
                               <p>Multivatamins</p>
                               <p>body Building</p>
                              <p>Creatine</p>
                           </div
         `;
});
service.addEventListener("mouseover", function () {
  fas[6].style.color = "rgb(0,191,191)";
  categorylistchild2.innerHTML = `
          <div>
                        <p>Whey Protien Isolate</p>
                        <p>Raw WheyProtiens</p>
                        <p>Plant Protiens</p>
                        
               </div>
            <div>
                <p>Gainers</p>
                               <p>Weight Gainers</p>
                               <p>Mass Gainers</p>
                               
                </div>
                          <div>
                               <p>Protein Foods </p>
                               <p>Protein Cookies</p>
                               <p>Peanut Butter</p>
                              
                           </div>
                          
         `;
});

function bestsellerschange1() {
  let change = document.getElementById("bestsellers-2");
  document.getElementById("best-sellers-button1").style.color =
    "rgb(0,191,191)";
  change.innerHTML = `
                            <p>Protien Powder</p>
                            <p>Vitamin Powder</p>
                            <p>Fat Burners</p>
                            <p>Protien Powder</p>
                            <p>Vitamin Powder</p>
                            <p>Fat Burners</p>
                            <p>Protien Powder</p>
                            <p>Vitamin Powder</p>
                            <p>Fat Burners</p>
                            <p>Protien Powder</p>
                            <p>Vitamin Powder</p>
                            <p>Fat Burners</p>
                            <p>Vitamin Powder</p>`;
  change.setAttribute("class", "bestsellers-2hover");
}

function bestsellerschange2() {
  let change = document.getElementById("bestsellers-2");
  document.getElementById("best-sellers-button2").style.color =
    "rgb(0,191,191)";
  change.innerHTML = `
                            <p>Multi Vitamins</p>
                            <p>Omega 3</p>
                            <p>Ayurvedha and herbs</p>
                            <p>Multi Vitamins</p>
                            <p>Omega 3</p>
                            <p>Ayurvedha and herbs</p>
                            <p>Multi Vitamins</p>
                            <p>Omega 3</p>
                            <p>Ayurvedha and herbs</p>
                            <p>Ayurvedha and herbs</p>`;
  change.setAttribute("class", "bestsellers-2hover");
}
sportsnutrition.addEventListener("mouseout", function () {
  fas[0].style.color = "black";
});
vitamins.addEventListener("mouseout", function () {
  fas[1].style.color = "black";
});
ayurvedha.addEventListener("mouseout", function () {
  fas[2].style.color = "black";
});
health.addEventListener("mouseout", function () {
  fas[3].style.color = "black";
});
fitness.addEventListener("mouseout", function () {
  fas[4].style.color = "black";
});
wellness.addEventListener("mouseout", function () {
  fas[5].style.color = "black";
});
service.addEventListener("mouseout", function () {
  fas[6].style.color = "black";
});
var number_cartip = document.getElementById("number_cartip");
var kola = JSON.parse(localStorage.getItem("in_cart"));
number_cartip.innerHTML = `${kola.length}`;
