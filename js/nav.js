const nav = document.getElementsByTagName("nav")[0];
const nav_link_list = document.getElementById("nav_links").children;

Array.from(nav_link_list).forEach(nav_link => {
    nav_link.addEventListener("click", function() {
        clickNavLink(nav_link)
    });
});

function clickNavLink(nav_link) {
    Array.from(nav_link_list).forEach(nav_link => {
        nav_link.classList.remove("nav_active")
    });

    nav_link.classList.add("nav_active");

    // console.log(nav_link.dataset.id);
}
