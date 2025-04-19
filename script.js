let timeElement = document.getElementById("time");
let n = 0;
function time() {
    timeElement.innerHTML = n;
    n++;
}
let t = setInterval(time, 1000);