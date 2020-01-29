


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
    {name: 'Skeleton' , image: 'media/frame-1.png'},
    {name: 'Narrator', image: 'media/transparent.png'}
    
]

function characters(text, characterChatColor, name, mediaPath, buttonOne = '' , buttonTwo = '' ) {
    let characterText = document.getElementsByClassName('characterText')[0];
    let characterChatBox = document.createElement('div');
    characterChatBox.className = ('row box');
    characterText.appendChild(characterChatBox);

    let characterNameRow = document.createElement('div');
    characterNameRow.className = ('row ');
    characterChatBox.appendChild(characterNameRow);

    let characterName = document.createElement('p');
    characterName.className = ('col-sm-push-2 col-sm-3 characterName')
    characterName.innerHTML = name;
    characterNameRow.appendChild(characterName)

    let picture = document.createElement('div');
    picture.className = ('col-xs-4 col-sm-2');
    characterChatBox.appendChild(picture);

    let image = document.createElement('img');
    image.className = ('img-responsive')
    image.src = mediaPath;
    picture.appendChild(image);

    let dialogueBox = document.createElement('div');
    dialogueBox.className = ('col-sm-10 col-xs-8 dialogueBox');
    characterChatBox.appendChild(dialogueBox);

    
    let dialogue = document.createElement('p');
    dialogue.innerHTML = text
    dialogueBox.appendChild(dialogue);
    
    if (characterName.innerHTML == 'Hero') {
        picture.className = ('col-xs-4 col-sm-4 skull_menu')
        dialogueBox.className = ('col-sm-8 col-xs-8')
        characterName.style.color = 'white'
        dialogue.style.color = 'white'
    }


    let color = characterChatBox
    color.style.backgroundColor = characterChatColor;

    let optionOne = document.createElement('button');
    optionOne.className = ('decisionButtons');
    optionOne.innerHTML = buttonOne;
    optionOne.id = 'optionOne';
    dialogueBox.appendChild(optionOne);


    let optionTwo = document.createElement('button');
    optionTwo.className = ('decisionButtons');
    optionTwo.id = 'optionTwo';
    optionTwo.innerHTML = buttonTwo;
    dialogueBox.appendChild(optionTwo);
    if (optionOne.innerHTML == '' && optionTwo.innerHTML == '') {
        optionOne.style.display = 'none'
        optionTwo.style.display = 'none'

    }
}


function village () {
    var hideSceneOne = document.getElementsByClassName('village')[0].style.display = 'initial';
    characters('You start to notice you are about to wake up... Do you choose to wake up or sleep more?', 
    'gray',  'narrator', 'media/transparent.png', 'Wake up', 'Sleep more')
    let wakeUp = document.getElementById('optionOne');
    wakeUp.addEventListener('click', (event) => {
        characters('I believe I should be getting up.' , '#003356', 'Hero', 'media/transparent.png')
        wakeUp.disabled = true;
        sleepMore.disabled = true

        setTimeout(() => {
            characters('You began to hear very heavy and rapid knocking and look over.' ,'gray' , 'narrator', 'media/transparent.png')
        }, 3000);
    });
    let sleepMore = document.getElementById('optionTwo');
    sleepMore.addEventListener('click', (event) => {
        characters('I think I will stay in bed for a bit more..', '#003356', 'Hero' , 'media/transparent.png')
        sleepMore.disabled = true
        wakeUp.disabled = true;
    });



    // let optionOne = document.getElementById('buttonOne');
    // let optionTwo = document.getElementById('buttonTwo');
    // characters('hello', 'gray', 'media/frame-1.png')
    //optionOne.addEventListener('click', battleScene)


}

function battleScene(enemyNumber, name, enemydamage, teamNumber, teamName, classScenario) {
    var scenario = document.getElementsByClassName(classScenario)[0].style.display = 'initial';
    // var hideScenario = document.getElementsByClassName(hideclassScenario)[0].style.display = 'none';
    var hideSceneOne = document.getElementsByClassName('village')[0].style.display = 'none';

    let attackButton = document.getElementById('attack');
    // let healButton = document.getElementById('heal');
   
    var enemies = []
    var enemyDetails = {};


        var enemiesHealth = document.getElementsByClassName('enemyHealthBar')[0];
        for (let i = 0; i < enemyNumber; i++) {
            const element = enemyNumber[i];
            let row = document.createElement('div')
            row.className = 'row enemyText'
            enemiesHealth.appendChild(row)
            let healthbox = document.createElement('div');
            healthbox.className = 'healthbox col-sm-5 col-xs-3'
            healthbox.setAttribute('data-enemy', [i]);
            healthbox.setAttribute('value', 50);
            row.appendChild(healthbox);
            healthbox = enemyNumber;
            let enemyName = document.createElement('p');
            enemyName.className = 'col-sm-6 col-xs-3 enemyTextName'
            row.appendChild(enemyName);
            enemyName.innerHTML = name;

            let numberHealth = document.getElementsByClassName('healthbox')[0].getAttribute('value');
            enemyDetails.name = name;
            enemyDetails.maxHealth = numberHealth;
            enemyDetails.health = numberHealth;
            enemyDetails.attack = enemydamage
            enemies.push(enemyDetails);
            // enemies.push = element;
            console.log(enemies)

        }
        var heroes = []
        var heroDetails = {}

        let herosHealth = document.getElementsByClassName('yourHealthBar')[0];
        for (let i = 0; i < teamNumber; i++) {
            const element = teamNumber[i];
            let row = document.createElement('div')
            row.className = 'row heroText'
            herosHealth.appendChild(row)
            let healthbox = document.createElement('div');
            healthbox.className = 'teamHealthBox col-sm-5 col-xs-3'
            healthbox.setAttribute('data-hero', [i]);
            healthbox.setAttribute('value', 100);
            row.appendChild(healthbox);
            healthbox = enemyNumber;
            let enemyName = document.createElement('p');
            enemyName.className = 'col-sm-6 col-xs-3 teamTextName'
            row.appendChild(enemyName);
            enemyName.innerHTML = teamName;

            let numberHealth = document.getElementsByClassName('teamHealthBox')[0].getAttribute('value');
            heroDetails.name = teamName;
            heroDetails.health = numberHealth;
            heroDetails.attack = 10
            heroes.push(heroDetails);
            console.log(enemies)
            
            
            
        }

        attackButton.addEventListener('click', initiateBattle)
        
        //while attack is true... 
        //do stuff
    function initiateBattle () {
        
        
        let no = true;
        let enemynodeList = document.querySelectorAll('.enemyText');
        let enemyArrayList = Array.from(enemynodeList)
        for (let i = 0; i < enemyArrayList.length ; i++) { 
            debugger
            enemyArrayList[i].addEventListener('click', function attackingEnemy() {
                if (no) {
                    switch (enemyArrayList[i]) {
                        case enemyArrayList[0]:
                            
                            enemies[0].health -= heroes[0].attack;
                            debugger
                            //console.log(enemies[0].health)
                            if (parseInt(enemies[0].health) < parseInt(enemies[0].maxHealth * .25)) {
                                enemyArrayList[0].querySelector('.healthbox').style.backgroundColor = 'red';
                            }
                            else if (parseInt(enemies[0].health) < parseInt(enemies[0].maxHealth * .50)) {
                                enemyArrayList[0].querySelector('.healthbox').style.backgroundColor = 'orange';
                            }
                            else if (parseInt(enemies[0].health) < parseInt(enemies[0].maxHealth * .75)) {
                                enemyArrayList[0].querySelector('.healthbox').style.backgroundColor = 'yellow';
                            }
                            no = false;
                            
                            break;
                        case enemyArrayList[1]:
                            
                            enemies[1].health -= heroes[0].attack;
                            debugger
                            if (parseInt(enemies[1].health) < parseInt(enemies[1].maxHealth * .25)) {
                                enemyArrayList[1].querySelector('.healthbox').style.backgroundColor = 'red';
                            }
                            else if (parseInt(enemies[1].health) < parseInt(enemies[1].maxHealth * .50)) {
                                enemyArrayList[1].querySelector('.healthbox').style.backgroundColor = 'orange';
                            }
                            else if (parseInt(enemies[1].health) < parseInt(enemies[1].maxHealth * .75)) {
                                enemyArrayList[1].querySelector('.healthbox').style.backgroundColor = 'yellow';
                            }
                            no = false;
                            break;
                        case enemyArrayList[2]:
                            console.log('3')
                            enemies[2].health -= heroes[0].attack;
                            if (parseInt(enemies[2].health) < parseInt(enemies[2].maxHealth * .25)) {
                                enemyArrayList[2].querySelector('.healthbox').style.backgroundColor = 'red';
                            }
                            else if (parseInt(enemies[2].health) < parseInt(enemies[2].maxHealth * .50)) {
                                enemyArrayList[2].querySelector('.healthbox').style.backgroundColor = 'orange';
                            }
                            else if (parseInt(enemies[2].health) < parseInt(enemies[2].maxHealth * .75)) {
                                enemyArrayList[2].querySelector('.healthbox').style.backgroundColor = 'yellow';
                            }
                            no = false;
                            break;
                        case enemyArrayList[3]:
                            console.log('4')
                            enemies[3].health -= heroes[0].attack;
                            if (parseInt(enemies[3].health) < parseInt(enemies[3].maxHealth * .25)) {
                                enemyArrayList[3].querySelector('.healthbox').style.backgroundColor = 'red';
                            }
                            else if (parseInt(enemies[3].health) < parseInt(enemies[3].maxHealth * .50)) {
                                enemyArrayList[3].querySelector('.healthbox').style.backgroundColor = 'orange';
                            }
                            else if (parseInt(enemies[3].health) < parseInt(enemies[3].maxHealth * .75)) {
                                enemyArrayList[3].querySelector('.healthbox').style.backgroundColor = 'yellow';
                            }
                            no = false;
                            break;
                        default:
                                no = false;
                            break;
                    }//switch End
                    for (let j = 0; j < enemyNumber; j++) {
                        const element = enemyNumber[j];
                        if (!no) {
                            function getRandonInt(max) {
                                return Math.floor(Math.random() * Math.floor(max));
                            }
                            switch (getRandonInt(20)) {
                                case max == 20:
                                heroes[0].health -= (2 * enemies[j].attack)
                                    
                                    break;
                            
                                default:
                                    break;
                            }
 
                            heroes[0].health -= enemies[j].attack
                            console.log(heroes[0].health);
                        }
                        //make a switch and make a miss with .random
                    }
                }//Conditional End
            });//eventlistender End
        }//for loop End
    }//Function initateBattle

}//Function Battlescene End
// battleScene(2, 'skeleton', 5, 1, 'Heroes', 'fightSceneOne' )
// battleScene(1, 'yo', 2, 1, 'Heroes', 'fightSceneTwo','fightSceneOne' )

