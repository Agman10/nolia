let l1, l2, l3, outX, outY;

l1 = document.getElementsByClassName('parallax-container__layer1')[0];
l2 = document.getElementsByClassName('parallax-container__layer2')[0];
l3 = document.getElementsByClassName('parallax-container__layer3')[0];

function move(x, y, mod, el) {
    el.style = "transform: translate3d(" + x / mod + "px, " + y / mod + "px, 0px)";   
}

document.addEventListener('mousemove', (e) => {
    move(e.x, e.y, 20, l1);
    move(e.x, e.y, 40, l2);
    move(e.x, e.y, 200, l3);
});

document.addEventListener('mouseout', (e) => {
    outX = e.x;
    outY = e.y;
});

document.addEventListener('mouseenter', (e) => {
});