
function menu() {
    //Want to add transition to buttons and changes.
    //D20 dice?? 
    var startGame = document.getElementById('startGame');
    var hideInstructions = document.getElementsByClassName('instructions')[0].style.display = 'none';
    var hideSceneOne = document.getElementsByClassName('village')[0].style.display = 'none';
    var hideFightOne = document.getElementsByClassName('fightSceneOne')[0].style.display = 'none';

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
//store images in a rray
var facePicture = [
    {name: 'Skeleton' , image: 'media/frame-1.png'}
]

function characters(text, characterChatColor, mediaPath ) {
    let characterText = document.getElementsByClassName('characterText')[0];
    console.log(characterText)
    let characterChatBox = document.createElement('div');
    characterChatBox.className = ('row box');
    characterText.appendChild(characterChatBox);

    let picture = document.createElement('div');
    picture.className = ('col-xs-4 col-sm-2');
    characterChatBox.appendChild(picture);

    let image = document.createElement('img');
    image.className = ('img-responsive')
    image.src = mediaPath;
    picture.appendChild(image);

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
    characters('Hello World', 'blue', facePicture[0].image)
    characters('Hello World', 'gray', 'media/frame-1.png')

    // optionTwo.addEventListener('click', first)
    // optionOne.addEventListener('click', first)
    // function first() {
    //     if (optionOne) {
    //         characters('Hello World', 'gray')
    
    //     } else if (optionTwo) {
    //         characters('Hello WOrld', 'blue')
    
    //     }
        
    // }
    
    optionOne.addEventListener('click', battleScene)


}

function battleScene(health, name, teamHealth, teamName) {
    var hideFightOne = document.getElementsByClassName('fightSceneOne')[0].style.display = 'initial';
    var hideSceneOne = document.getElementsByClassName('village')[0].style.display = 'none';
    let attackButton = document.getElementById('attack');
    let healButton = document.getElementById('heal');
   
    var enemies = []
    var enemyDetails = {}


        let enemiesHealth = document.getElementsByClassName('enemyHealthBar')[0];
        for (let i = 0; i < health; i++) {
            const element = health[i];
            let row = document.createElement('div')
            row.className = 'row enemyText'
            enemiesHealth.appendChild(row)
            let healthbox = document.createElement('div');
            healthbox.className = 'healthbox col-sm-5 col-xs-3'
            healthbox.setAttribute('data-enemy', [i]);
            healthbox.setAttribute('value', 100);
            row.appendChild(healthbox);
            healthbox = health;
            let enemyName = document.createElement('p');
            enemyName.className = 'col-sm-6 col-xs-3 enemyTextName'
            row.appendChild(enemyName);
            enemyName.innerHTML = name;

            let numberHealth = document.getElementsByClassName('healthbox')[0].getAttribute('value');
            enemyDetails.name = name;
            enemyDetails.health = numberHealth;
            enemies.push(enemyDetails);
            // enemies.push = element;
            // console.log(numberHealth)

        }
        var heroes = []
        var heroDetails = {}

        let herosHealth = document.getElementsByClassName('yourHealthBar')[0];
        for (let i = 0; i < teamHealth; i++) {
            const element = teamHealth[i];
            let row = document.createElement('div')
            row.className = 'row enemyText'
            herosHealth.appendChild(row)
            let healthbox = document.createElement('div');
            healthbox.className = 'teamHealthBox col-sm-5 col-xs-3'
            healthbox.setAttribute('data-hero', [i]);
            healthbox. setAttribute('value', 100);
            row.appendChild(healthbox);
            healthbox = health;
            let enemyName = document.createElement('p');
            enemyName.className = 'col-sm-6 col-xs-3 teamTextName'
            row.appendChild(enemyName);
            enemyName.innerHTML = teamName;

            let numberHealth = document.getElementsByClassName('teamHealthBox')[0].getAttribute('value');
            heroDetails.name = teamName;
            heroDetails.health = numberHealth;
            heroes.push(heroDetails);

            
        }

        // attackButton.addEventListener('click', attackLogic)

        function initiateBattle () {
            
        }
}
battleScene(1, 'skeleton', 1, 'Heroes')