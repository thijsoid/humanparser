// details animation based on: https://stackoverflow.com/questions/69958043/animate-a-details-tag-when-closing
const details_list = document.querySelectorAll("details");

details_list.forEach(function (details) {
    details.addEventListener("click", (e) => {
        if (details.hasAttribute("open")) { // since it's not closed yet, it's open!
            e.preventDefault(); // stop the default behavior, meaning - the hiding
            details.classList.add("closing"); // add a class which applies the animation in CSS
        }
    });
});

details_list.forEach(function (details) {
    details.addEventListener("animationend", (e) => {
        if (e.animationName === "close") {
            details.removeAttribute("open"); // close the element
            details.classList.remove("closing"); // remove the animation
        }
    });
});

// overriding details collapse with href based on: https://jsfiddle.net/3amv86ex/13/
document.addEventListener("click", function (evt) {
    var el = evt.target;
    var href = "";
    if (!el.href) {
        return;
    }
    href = el.getAttribute("href");
    window.open(href);
    
});
