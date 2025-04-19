let timeElement = document.getElementById("time");
// let n = 0;

function time() {
  // timeElement.innerHTML = n;
  // n++;
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
//   if (s < 10) {
//     s = "0" + s;
//   }
  s = s < 10 ? "0" + s : s;
  timeElement.innerHTML = `<span>${h}</span>:<span>${m}</span>:<span>${s}</span>`;
}

let t = setInterval(time, 1000);
