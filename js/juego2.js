correctas = [3, 1, 2, 2, 3];

//arreglo donde se guardan las repuestas del usuario}
opcion_elegida = [];
cantidad_correctas = 0;

function repuesta(num_pregunta, seleccionada) {
  opcion_elegida[num_pregunta] = seleccionada.value;

  id = "p" + num_pregunta;
  labels = document.getElementById(id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";

  seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

function corregir() {
  cantidad_correctas = 0;
  for (i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcion_elegida[i]) {
      cantidad_correctas++;
    }
  }

  document.getElementById("resultado").innerHTML = cantidad_correctas;
}

// fondo
const animator = document.querySelector(".animator");
const colors = ["#604d8a ", "#025573 ", "#7a5587 "];

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
