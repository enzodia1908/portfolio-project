// // fade-in-down function 


window.addEventListener("load", () => {
    const items = document.querySelectorAll(".fade-down");
    const itemsArray = Array.from(items);
    itemsArray.forEach((item, index) => {
        item.style.animation = `fadeInDown 0.5s ease-out ${index * 0.2}s forwards`;
    })
});


$(document).on("scroll", () => {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var fades = $(".fade");

    for (var i = 0; i < fades.length; i++) {
        var fade = fades[i];
        if ($(fade).position().top < pageBottom) {
            $(fade).addClass("visible");
        } 
    }
});


// window.addEventListener("load", () => {
//     document.querySelector(".fade-in").classList.add("visible");
// });