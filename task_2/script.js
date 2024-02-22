let el_all = document.querySelectorAll(".container img");
let el_left = document.querySelector(".left");
let el_right = document.querySelector(".right");
let conarr = 0;
let num = document.getElementById("num");


el_left.addEventListener('click', () => {
    el_all[conarr].classList.remove("active");
    if (conarr === el_all.length - 1) {
        conarr = 0;
    } else {
        conarr++
    }
    el_all[conarr].classList.add("active");
    num.innerHTML = `_ [${conarr +1}]`;
})

// =======================================================================================

el_right.addEventListener('click', () => {
    el_all[conarr].classList.remove("active");
    if (conarr === 0) {
        conarr = el_all.length - 1;
    } else {
        conarr--;
    }
    el_all[conarr].classList.add("active");
    num.innerHTML = `_ [${conarr +1}]`;
})








