const sliders = document.querySelectorAll(".slider__img");
const prevBtn = document.querySelector(".slider__left");
const nextBtn = document.querySelector(".slider__right");
const pagination = document.querySelectorAll(".slider__pagination-item");
let currSlide = 0;
// ======================================================================
let el_num_all = document.querySelector(".current-counter");
let el_num_img = document.querySelector(".total-counter");

el_num_all.innerHTML = sliders.length;

nextBtn.addEventListener("click", () => {
  sliders[currSlide].classList.remove("slider__img--active");
  pagination[currSlide].classList.remove("slider__pagination-item--active");
  if (currSlide == sliders.length - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  el_num_img.innerHTML = currSlide+1;
  pagination[currSlide].classList.add("slider__pagination-item--active");

  sliders[currSlide].classList.add("slider__img--active");
});



prevBtn.addEventListener("click", () => {
  sliders[currSlide].classList.remove("slider__img--active");
  pagination[currSlide].classList.remove("slider__pagination-item--active");
  if (currSlide == 0) {
    currSlide = sliders.length - 1;
  } else {
    currSlide--;
    
  }
  el_num_img.innerHTML = currSlide+1;
  pagination[currSlide].classList.add("slider__pagination-item--active");
  sliders[currSlide].classList.add("slider__img--active");
});



pagination.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    sliders[currSlide].classList.remove("slider__img--active");
    pagination[currSlide].classList.remove("slider__pagination-item--active");
    currSlide = index;
    sliders[currSlide].classList.add("slider__img--active");
    pagination[currSlide].classList.add("slider__pagination-item--active");
    el_num_img.innerHTML = currSlide+1;
  });
});


// remove + add function 
// counter 
// bem search
// problem  2 