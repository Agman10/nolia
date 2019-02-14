let l1, l2, l3;

l1 = document.getElementsByClassName('layer1')[0];
l2 = document.getElementsByClassName('layer2')[0];
l3 = document.getElementsByClassName('layer3')[0];

document.addEventListener("mousemove", (e) => {
    l1.style = "transform: translate3d(" + e.x/100 + "px, " + e.y/50 + "px, 0px)";
    l2.style = "transform: translate3d(" + e.x/500 + "px, " + e.y/100 + "px, 0px)";
    l3.style = "transform: translate3d(" + e.x/1000 + "px, " + e.y/500 + "px, 0px)";
});