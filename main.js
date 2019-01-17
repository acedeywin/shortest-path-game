//Declaration of Global Variables
var mattWorld = ['M', 'D', 'T', 'H'];
var canvas = document.getElementById('canvas');
var reset = document.getElementById('reset');
var start = document.getElementById('start');
var note1 = document.getElementById('note1');
var note2 = document.getElementById('note2');
var enjoy = document.getElementById('enjoy');
var sideText = document.getElementById('side-text');
var context = canvas.getContext('2d');

reset.style.display = 'none';
enjoy.style.display = 'none';

//canvas function for text input grid
var myCanvas = function (){
  context.lineWidth = 2;
  context.strokeStyle = '#e6e6e6';

  //vertical lines
  context.beginPath();
  context.moveTo(130, 5);
  context.lineTo(130, 320);
  context.closePath();
  context.stroke();
  context.beginPath();
  context.moveTo(260, 5);
  context.lineTo(260, 320);
  context.closePath();
  context.stroke();

    // horizontal lines
    context.beginPath();
    context.moveTo(5, 100);
    context.lineTo(395, 100);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(5, 200);
    context.lineTo(395, 200);
    context.closePath();
    context.stroke();
}
//function for text input
var playGame = function(){
  window.addEventListener('keydown', setGame, true);
  function setGame(e){
    context.fillStyle = '#e6e6e6';
    context.font = '100px San Serif';

      if(e.keyCode == '49' || e.keyCode == '81' === true){ // 1 or Q button
          context.fillText(mattWorld[0], 20, 85);
        }else if(e.keyCode == '50' || e.keyCode == '87' === true){ // 2 or W button
          context.fillText(mattWorld[1], 160, 85);
        }else if(e.keyCode == '51' || e.keyCode == '69' === true){ // 3 or E button
          context.fillText(mattWorld[1], 295, 85);
        }else if(e.keyCode == '52' || e.keyCode == '65' === true){ // 4 or A button
          context.fillText(mattWorld[1], 28, 182);
        }else if(e.keyCode == '53' || e.keyCode == '83' === true){ // 5 or S button
          context.fillText(mattWorld[2], 160, 182);
          sideText.innerText = "Matt's path is blocked by trees.\n Reset Game and Start Again.";
          canvas.style.display = 'none';
        }else if(e.keyCode == '54' || e.keyCode == '68' === true){ // 6 or D button
          context.fillText(mattWorld[1], 295, 182);
        }else if(e.keyCode == '55' || e.keyCode == '90' === true){ // 7 or Z button
          context.fillText(mattWorld[1], 28, 285);
        }else if(e.keyCode == '56' || e.keyCode == '88' === true){ // 8 or x button
          context.fillText(mattWorld[1], 160, 285);
        }else if(e.keyCode == '57' || e.keyCode == '67' === true){ // 9 or x button
          context.fillText(mattWorld[3], 295, 285);
          enjoy.style.font = '60px San Serif';
          enjoy.innerText = "Well Done! \n Reset Game";
          sideText.innerText = "Matt just got Home!";
        }
    }
  }
  /*else{
    return sideText.innerText = "Either Matt is not home yet or Matt did not go through the right path!";
  }
  function endGame(){

  }*/

//Setting start button
var startGame = function (){
  start.addEventListener('click', function(){
    myCanvas();
    playGame();
    //endGame();
    reset.style.display = 'inline';
    enjoy.style.display = 'inline';
    start.style.display = 'none';
    note1.style.display = 'none';
    note2.style.display = 'none';
  });
}
startGame();
