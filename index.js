let bars = document.getElementsByClassName("navIcon")[0];
let sideNav = document.getElementsByClassName("sidebar")[0];
let abort = document.getElementsByClassName("abort")[0]

function open() {
    sideNav.style.width = "60%";

}

function close() {
    sideNav.style.width = "0";

}

bars.addEventListener("click", open);
abort.addEventListener("click", close);
console.log("Git and github are easire to understand");