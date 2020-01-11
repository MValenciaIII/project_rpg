
function menu() {
    var startGame = document.getElementById('startGame');
    var hideInstructions = document.getElementsByClassName('instructions')[0].style.display = 'none';

    var instructions = document.getElementById('instructions');
    startGame.addEventListener('click', village);
    
    
    function village() {
        var hideMenu = document.getElementsByClassName('menu')[0].style.display = 'none';
        var background = document.querySelector('body').style.backgroundColor = 'white'
        
        
        return hideMenu + background;
    }
    instructions.addEventListener('click', instructionMenu);
    
    function instructionMenu() {
        let hideButtons = document.getElementsByClassName('menuButtons')[0].style.display = 'none';
        let showInstructions = document.getElementsByClassName('instructions')[0].style.display = 'block';

        return showInstructions + hideButtons;
    }
}
menu();