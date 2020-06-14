window.onscroll = function() {
    let nav = document.getElementsByTagName("nav")[0];

    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add("nav_scrolled");
    } else {
        nav.classList.remove("nav_scrolled");
    }

    // console.log("scroll: " + window.scrollY);
    // console.log("scroll: " + nav.offsetHeight);
}

