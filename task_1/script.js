let el_all = document.querySelectorAll(".container img");
let el_Basic = document.getElementById("Basic");

el_all.forEach((e) => {
    e.addEventListener("click", () =>{
        el_Basic.setAttribute("src", `${e.getAttribute("src")}`)
    })
});