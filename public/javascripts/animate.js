let l1, l2, l3, l1obj;

l1 = document.getElementsByClassName('layer1')[0];
l2 = document.getElementsByClassName('layer2')[0];
l3 = document.getElementsByClassName('layer3')[0];

l1obj = {
    "delta": 1,
    "x": 0,
    "y": 0,
    "step": 0
}



let i = 0;
let delta = 1;
let start;

function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    l1obj.x = l1obj.x + (l1obj.step * l1obj.delta) / 100;
    l1obj.y = l1obj.y + (l1obj.step * l1obj.delta) / 100;
    l1.style = "transform: translate3d(" + l1obj.x + "px, " + l1obj.y + "px, 0px)";
    l1obj.step++;

    if (progress < 2000) {
        l1obj.delta = 0;
        l1obj.step = 0;
        window.requestAnimationFrame(step);
    }
}
  
window.requestAnimationFrame(step);