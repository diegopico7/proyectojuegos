document.getElementById("player").addEventListener("mouseover", sumarPuntos);

var puntos = 0;
var tiempo = 10;
var necesarios = 30;
function sumarPuntos() {
  puntos++;
  document.getElementById("puntos").innerHTML =
    "Puntos: <b> " + puntos + "/" + necesarios + "</b>";

  let randNum = Math.round(Math.random() * 400);
  let randNum2 = Math.round(Math.random() * 400);

  document.getElementById("player").style.margin = randNum + "px";
  document.getElementById("player").style.marginLeft = randNum2 + "px";
  if (puntos == 30) {
    alert("ganaste Goleador");
    tiempo = 10;
    puntos = 0;
  }
}

function restarTiempo() {
  tiempo--;
  document.getElementById("tiempo").innerHTML =
    "&nbsp;&nbsp;&nbsp" + "tiempo: " + tiempo + " ";
  if (tiempo == 0) {
    alert("perdiste capo");

    tiempo = 30;
    puntos = 0;
  }
}
// setInterval(restarTiempo, 1000);
const interval = setInterval(function () {
  restarTiempo();
}, 1000);

// fondo
const animator = document.querySelector(".animator");
const colors=['#604d8a ', '#025573 ','#7a5587 ',];

const figures = () => {
  for (let i = 0; i <= 25; i++) {
    let figure = document.createElement("span");
    let select = Math.round(colors.length * Math.random());

    figure.style.top = innerHeight * Math.random() + "px";
    figure.style.left = innerWidth * Math.random() + "px";
    figure.style.background =
      colors[select >= colors.length ? colors - 1 : select];
    animator.appendChild(figure);
    setInterval(() => {
      figure.style.top = innerHeight * Math.random() + "px";
      figure.style.left = innerWidth * Math.random() + "px";
    }, 2500);
  }
};
figures();
