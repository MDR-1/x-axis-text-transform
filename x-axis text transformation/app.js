type = document.querySelector("#type");
container = document.querySelector(".container");
nav = document.querySelector("#nav");
link = document.querySelector("#contact");
anchor = document.querySelector("a");

nav.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
    type.style.transform = `translate3d(${xAxis}%, 0px, 0px)`;
    type.style.transition = "none";
});

nav.addEventListener("mouseleave", () => {
    type.style.transform = `translate3d(8%, 0px, 0px)`;
    type.style.transition = "all 250ms ease";
})

link.addEventListener("mouseover", () => {
    container.classList.add("background");
});

link.addEventListener("mouseleave", () => {
    container.classList.remove("background");
    type.classList.remove("font");
});