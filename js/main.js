// start of navigation part
let nav_icon = document.getElementById("nav_icon")
let nav_item = document.getElementById("nav-item")
nav_icon.addEventListener('click', display)

function display() {
    if (window.getComputedStyle(nav_item).display === "none") {
        nav_item.style.display = "block"
    } else {
        nav_item.style.display = "none"
    }
}


// End of navigation part