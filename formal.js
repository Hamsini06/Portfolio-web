let items = document.querySelector('.items');
let innerSlider = document.querySelector('.inner-slider');
let card = document.querySelector('.card-s');
let pressed = false;
let x;
let startX;

items.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    items.style.cursor = "grabbing";    
});

items.addEventListener("mouseenter", () => {
    items.style.cursor = "grab";
});

items.addEventListener("mouseup", () => {
    items.style.cursor = "grab";
    pressed = false;
});
items.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    innerSlider.style.left = `${x - startX}px`;
});
const checkBoundary = () => {
    let outer = items.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};
items.addEventListener("mousemove", (e) => {
    checkBoundary();
});