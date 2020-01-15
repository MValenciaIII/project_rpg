
function menu() {
    //Want to add transition to buttons and changes.
    //D20 dice?? 
    var startGame = document.getElementById('startGame');
    var hideInstructions = document.getElementsByClassName('instructions')[0].style.display = 'none';
    var hideSceneOne = document.getElementsByClassName('village')[0].style.display = 'none';
    let background = document.querySelector('body');
    startGame.addEventListener('click', clearMenu);
    
    
    function clearMenu() {
        var hideMenu = document.getElementsByClassName('menu')[0].style.display = 'none';
        background.style.backgroundColor = 'black'

        village();
        
        return hideMenu + background;
    }
    
    var instructions = document.getElementById('instructions');
    instructions.addEventListener('click', instructionMenu);
    
    function instructionMenu() {
        let hideButtons = document.getElementsByClassName('menuButtons')[0].style.display = 'none';
        let showInstructions = document.getElementsByClassName('instructions')[0].style.display = 'block';

        return showInstructions + hideButtons;
    }

    var backToMenu = document.getElementById('backToMenu');
    backToMenu.addEventListener('click', sendToMenu)

    function sendToMenu() {
        let hideButtons = document.getElementsByClassName('menuButtons')[0].style.display = 'initial';
        let hideInstructions = document.getElementsByClassName('instructions')[0].style.display = 'none';

        return hideInstructions + hideButtons;
    }

}
menu();
//NaN !=  NaN
//Use an object to hold all conversations. Then call it and make a function to change the color of the conversation depending on the person.
var filler = new Image();
filler.src = "media/frame-1.png"

function characters(text, characterChatColor ) {
    let characterText = document.getElementsByClassName('characterText')[0];
    let characterChatBox = document.createElement('div');
    characterChatBox.className = ('row box');
    characterText.appendChild(characterChatBox);
    let picture = document.createElement('div');
    picture.className = ('col-xs-4 col-sm-2');
    characterChatBox.appendChild(picture);
    let image = document.createElement('img');
    image.className = ('img-responsive')
    //image.src = mediaPath;
    image.appendChild(picture);
    let dialogueBox = document.createElement('div');
    dialogueBox.className = ('col-sm-10 col-xs-8');
    characterChatBox.appendChild(dialogueBox);
    let dialogue = document.createElement('p');
    dialogue.innerHTML = text;
    dialogueBox.appendChild(dialogue);

    let color = characterChatBox
    color.style.backgroundColor = characterChatColor;
}


function village () {
    var hideSceneOne = document.getElementsByClassName('village')[0].style.display = 'initial';
    let optionOne = document.getElementById('buttonOne');
    let optionTwo = document.getElementById('buttonTwo');
    // optionTwo.addEventListener('click', first)
    // optionOne.addEventListener('click', first)
    // function first() {
    //     if (optionOne) {
    //         characters('Hello World', 'gray')
    
    //     } else if (optionTwo) {
    //         characters('Hello WOrld', 'blue')
    
    //     }
        
    // }
    

}
