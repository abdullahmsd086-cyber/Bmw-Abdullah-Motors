window.addEventListener("load", function(){
    setTimeout(function(){
        const loader = document.getElementById("loader");
        loader.classList.add("hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }, 500);
});