function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}



window.setInterval(function() {
  const allElements = document.querySelectorAll("*");
let textElements = []


allElements.forEach((ele) => ele.innerText != undefined && ele.innerText.length > 0 && textElements.push(ele));

try {
  element.innerHTML = getRndInteger(0, 109999900)
} catch (err) {

}
}, 1)
