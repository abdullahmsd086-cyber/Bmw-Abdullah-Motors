window.addEventListener("load", function(){
    setTimeout(function(){
        const loader = document.getElementById("loader");
        loader.classList.add("hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }, 500);
});


function toggleMenu() {
    var menu = document.getElementById("nav-links");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
