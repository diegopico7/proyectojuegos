// fondo
const animator= document.querySelector('.animator');
const colors=['#604d8a ', '#025573 ','#7a5587 ',];

const figures=()=>{
    for(let i=0; i <= 25; i++){
        let figure =document.createElement('span')
        let select = Math.round(colors.length * Math.random())

        figure.style.top =innerHeight*Math.random() +'px'
        figure.style.left=innerWidth*Math.random() + 'px'
        figure.style.background =colors[select >= colors.length ? colors -1 : select]
        animator.appendChild(figure)
        setInterval(() =>{
            figure.style.top =innerHeight * Math.random() +'px'
            figure.style.left = innerWidth * Math.random()+ 'px'

        },2500)
    }
}
figures()

// js piedra-papel-tijera

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST =2;

const rockBtn =document.getElementById("rock");
const paperBtn =document.getElementById("paper");
const scissorsBtn =document.getElementById("scissors");
const resutlText= document.getElementById("start-text");
const userImg= document.getElementById("user-img");
const machineImg= document.getElementById("machine-img");


rockBtn.addEventListener("click", ()=>{
    play(ROCK);

});
paperBtn.addEventListener("click", ()=>{
    play(PAPER);
    
});
scissorsBtn.addEventListener("click", ()=>{
    play(SCISSORS)

});

function play(userOption){
    const machineOption= calcMachineOption();
    const result= calcResult(userOption, machineOption);

    userImg.src ="./img/" + userOption + ".png";
    machineImg.src ="./img/" + machineOption + ".png";
    
    switch(result){
        case TIE:
            resutlText.innerHTML="Has Empatado";
            break;
        case WIN:
            resutlText.innerHTML="Has Ganado";
            break;
        case LOST:
            resutlText.innerHTML="Has Perdido";
            break;
    }
    

}
function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}
function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;

    } else if (userOption === ROCK){
        if(machineOption === PAPER) return LOST;
        if(machineOption === SCISSORS) return WIN;
        
    } else if (userOption === PAPER){
        if(machineOption === ROCK) return WIN;
        if(machineOption === SCISSORS) return LOST;
        
    }else if (userOption === SCISSORS){
        if(machineOption === PAPER) return WIN;
        if(machineOption === ROCK) return LOST;
        
    }
}