// // fade-in-down function 


window.addEventListener("load", () => {
    const items = document.querySelectorAll(".fade-down");
    const itemsArray = Array.from(items);
    itemsArray.forEach((item, index) => {
        item.style.animation = `fadeInDown 0.5s ease-out ${index * 0.2}s forwards`;
    })
});



// window.addEventListener("load", () => {
//     document.querySelector(".fade-in").classList.add("visible");
// });