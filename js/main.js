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

// start animation triger when elemenent is seen 

const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("st", entry.isIntersecting);
    });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 };

const elements = document.querySelectorAll('.statistic');
elements.forEach(el => {
    observer.observe(el, options);
});


// end animation triger when elemenent is seen