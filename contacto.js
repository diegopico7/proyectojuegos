const mensaje = document.getElementById("p-1");

function enviar() {
  let nombre = document.getElementById("nombre").value;
  let mail = document.getElementById("mail").value;
  let cel = document.getElementById("cel").value;
  console.log(nombre);
  console.log(mail);
  console.log(cel);
  let cartel = "Enviamos su Información, Muchas Gracias";

  alert(cartel);
}

// fondo
const animator = document.querySelector(".animator");
const colors = ["#04FF00 ", "#F0FF00 ", "#0018B2 ", "#FF01F3", "#FF0101 "];

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
    }, 1000);
  }
};
figures();
