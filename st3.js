var vocie1= new Audio("sounds/green.mp3");
var vocie2= new Audio("sounds/RED.mp3");
var vocie3= new Audio("sounds/YELLOW.mp3");
var vocie4= new Audio("sounds/green.mp3");
var vocie= new Audio("sounds/WRONG.mp3");
let seq=[];
let highlightedButton;
let gameRun= false;
let count = 1;
let ind=0;
document.addEventListener('keydown', function(event) {
    if ((event.key == 'A'||event.key == 'a' ) && !gameRun) {
        document.getElementById('key').innerHTML = "Level 1";
        gameRunning = true;
        basicgame();
    }
});


function highlightbutton() {

    let buttons = document.querySelectorAll('#b button');

    buttons.forEach(button => {

        button.classList.remove('highlight');
    });
    let randomIndex = Math.floor(Math.random() * buttons.length);
    highlightedButton = buttons[randomIndex];
    highlightedButton.classList.add('highlight');
    
    setTimeout(()=>{highlightedButton.classList.remove('highlight');},500)
    seq.push(highlightedButton.id);
    ind=0;
    if (highlightedButton.id == 'b1') {
      vocie1.play();
    } else if (highlightedButton.id == 'b2') {
      vocie2.play();
    } else if (highlightedButton.id == 'b3') {
      vocie3.play();
    } else if (highlightedButton.id == 'b4') {
      vocie4.play();
    }
}

function pressedcolor(buttonId){
    let buttons = document.querySelectorAll('#b button');
    for(let i=0;i<buttons.length;i++){
        if(buttonId==buttons[i].id)buttons[i].classList.add("highlight");
        setTimeout(()=>{highlightedButton.classList.remove('highlight');},500)
        if (buttonId == 'b1') {
            vocie1.play();
          } else if (buttonId == 'b2') {
            vocie2.play();
          } else if (buttonId == 'b3') {
            vocie3.play();
          } else if (buttonId == 'b4') {
            vocie4.play();
          }
    }
}
function checkSequence(buttonId){
 if(seq[ind]==buttonId){
    pressedcolor(buttonId);
    if(ind+1==seq.length){
    count++;
    document.getElementById('key').innerHTML = "Level " + count;
    highlightbutton();
    }else ind++;
 }else{
    gameRun= false;
    vocie.play();
                document.getElementById('key').innerHTML = "Game Over! You clicked the wrong button,Press A key to start again";
                count = 1;
                seq=[];
                
 }
}

function basicgame() {


    highlightbutton();
    document.getElementById('key').innerHTML = "Level " + count;
    let buttons = document.querySelectorAll('#b button');


    buttons.forEach(button => {
        button.onclick = function() {
      checkSequence(button.id);

            
    }});
    
}
