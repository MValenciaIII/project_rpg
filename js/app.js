
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
//Use an object to hold all conversations. Then call it and make a function to change the color of the conversation depending on the person.
// function characters (text) {
//     let characterChatBox = document.createElement('div');
//     characterChatBox.className = 'characterChatBox'
//     let
    
// }

function village () {
    var hideSceneOne = document.getElementsByClassName('village')[0].style.display = 'initial';
    let background = document.getElementsByClassName('characterAnimation')[0];
    background.style.backgroundImage = "url('media/village8bit.png')"
    background.style.backgroundRepeat = 'no-repeat'
    background.style.backgroundSize = 'cover'

    let optionOne = document.getElementById('buttonOne');
    let optionTwo = document.getElementById('buttonTwo');

}
