const dino = document.querySelector('.dino'); // const = não pode ter outro "dino"
const background = document.querySelector('.background');
let position = 0; //let pode ser modificado dps 
let itsJumping = false;

    //console.log(dino);
//detectar barra de espaço
function handleKeyUp (event) {
    if (event.keyCode === 32 ){
        console.log('Pressionou espaço!!')
        if (!itsJumping){

        
        jump();}
    }

}
function jump () {
    
    itsJumping = true;


    let upInterval = setInterval(() => {
        if (position >= 150 ) {
        clearInterval(upInterval)
        // Descendo
        let downInterval = setInterval(() => {
        if ( position <= 0) {
            clearInterval(downInterval);
            itsJumping = false;
        } else {

        position -= 20; //position = position +/- 20      
        dino.style.bottom = position + 'px';

        }},20) //intervalo de 20 ms 
        



    } else {
        // Subindo
        position += 20; //position = position +/- 20
        dino.style.bottom = position + 'px';
      }
    }, 20); //intervalo de 20 ms 
  }

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  background.appendChild(cactus);

  let leftInterval = setInterval (() => {
      if (cactusPosition <= -60) {
          clearInterval(leftInterval);
          background.removeChild(cactus);
      } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60 ) { 

           clearInterval(leftInterval);
           document.body.innerHTML = '<h1 class="game-over">Game over!</h1>'
       } else {
          cactusPosition -= 10;
          cactus.style.left = cactusPosition + 'px';
      }
  },20)

  setTimeout(createCactus, randomTime)
} 
//tudo gera eventos, teclas, cliques etc, o listener "ouve" tais eventos, gerando um evento - resposta a tecla
createCactus()
document.addEventListener('keyup', handleKeyUp);