


function menu() {
    //Want to add transition to buttons and changes.
    //D20 dice?? 
    document.querySelector('.menuButtons').className = 'menuButtons sceneTransition'
    var startGame = document.getElementById('startGame');
    var hideInstructions = document.getElementsByClassName('instructions')[0].style.display = 'none';
    var hideSceneOne = document.getElementsByClassName('village')[0];
    hideSceneOne.style.display = 'none';
    var hideFightOne = document.getElementsByClassName('fightSceneOne')[0].style.display = 'none';
    var hideSceneTransition = document.querySelector('.villageSceneTransition');
    hideSceneTransition.style.display = 'none';
    let background = document.querySelector('body');
    startGame.addEventListener('click', clearMenu);
    
    
    function clearMenu() {
        var hideMenu = document.getElementsByClassName('menu')[0].style.display = 'none';
        hideSceneTransition.style.display = 'initial';
        background.style.backgroundColor = 'black'
        village();
        hideSceneOne.style.display = 'none';
        hideSceneTransition.className = 'sceneTransition'
        setTimeout(() => {
        hideSceneOne.style.display = 'initial';
        hideSceneTransition.style.display = 'none';
        let rowSceneOne = document.querySelector('.village .gameSceneOne').className = 'row gameSceneOne villageFadingIn'
        }, 5000);

        return hideMenu + background;
    }
    
    var instructions = document.getElementById('instructions');
    instructions.addEventListener('click', instructionMenu);
    
    function instructionMenu() {
        let transitionbuttons = document.querySelector('.instructions').className = 'instructions sceneTransition';
        let hideButtons = document.getElementsByClassName('menuButtons')[0].style.display = 'none';
        let showInstructions = document.getElementsByClassName('instructions')[0].style.display = 'block';
        
        return showInstructions + hideButtons;
    }

    var backToMenu = document.getElementById('backToMenu');
    backToMenu.addEventListener('click', sendToMenu)

    function sendToMenu() {
        let hideButtons = document.querySelector('.menuButtons').style.display = 'initial';
        document.querySelector('.menuButtons').className = 'menuButtons sceneTransition'
        let hideInstructions = document.getElementsByClassName('instructions')[0].style.display = 'none';

        return hideInstructions + hideButtons;
    }
    

}
menu();
//NaN !=  NaN
//Use an object to hold all conversations. Then call it and make a function to change the color of the conversation depending on the person.
//store images in a rray

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
        optionOne.id = '';
        optionTwo.id = '';
        optionOne.style.display = 'none'
        optionTwo.style.display = 'none'

    }
}


function village () {
    var hideSceneOne = document.getElementsByClassName('village')[0].style.display = 'initial';
    characters('You start to notice you are about to wake up... Do you choose to wake up or sleep more?', 
    'gray',  'narrator', 'media/transparent.png', 'Wake up', 'Sleep more')
    let wakeUp = document.getElementById('optionOne');
    wakeUp.addEventListener('click', (event) => { //Decision 1 (Wake up) 
        characters('I believe I should be getting up.' , '#003356', 'Hero', 'media/transparent.png')
        document.querySelector('.characterAnimation div').className = 'villageWoman';
        wakeUp.disabled = true;
        sleepMore.disabled = true;

        setTimeout(() => {
            characters('You began to hear very heavy and rapid knocking and look over.' ,'gray' , 'narrator', 'media/transparent.png')

            setTimeout(() => {
                characters('Please please help me. It\'s an emergency!', 'lightblue', 'lady' , 'media/transparent.png' )

                document.querySelector('.characterAnimation div').className = 'villageWomanBack';

                setTimeout(() => { 
                    characters('Do you open the door?', 'gray', 'Narrator' , 'media/transparent.png', 'Open the door', 'Ignore it' )
                    var openDoor = document.querySelectorAll('#optionOne')[1];
                    var ignoreHer = document.querySelectorAll('#optionTwo')[1];
                    
                    openDoor.addEventListener('click',  () => {
                        opening();

                        openDoor.disabled = true;
                        ignoreHer.disabled = true;
                    })
                    ignoreHer.addEventListener('click', () => {
                        ignore();

                        openDoor.disabled = true;
                        ignoreHer.disabled = true;
                    })
                        
                        
                }, 2000);//End of Decision Door open or ignore.
            }, 1000);// end of Lady going nuts
        }, 2000); // End of wakeUp event listener
    });
    let sleepMore = document.getElementById('optionTwo');
    sleepMore.addEventListener('click', (event) => { //Decision 1 (Sleep more)
        characters('I think I will stay in bed for a bit more..', '#003356', 'Hero' , 'media/transparent.png');
        sleepMore.disabled = true
        wakeUp.disabled = true;
        document.querySelector('.characterAnimation div').className = 'villageWoman';
        setTimeout(() => {
            characters('You began to hear very heavy and rapid knocking' ,'gray' , 'narrator', 'media/transparent.png', 'Get up?', 'ignore it?');
            document.querySelector('.characterAnimation div').className = 'villageWomanBack';
            let getUp = document.querySelectorAll('#optionOne')[1];
            let ignoreWoman = document.querySelectorAll('#optionTwo')[1];
            getUp.addEventListener('click', () => {
                characters('Hold on I\'m coming to open the door!', '#003356', 'Hero','media/transparent.png'  );
                setTimeout(() => {
                    opening()
                }, 2000);
            })
        }, 2000);
    });

    function opening() { //
        characters('What\'s wrong? Who are you?','#003356', 'Hero',  'media/transparent.png');
        setTimeout(() => {
            characters('My name is Julie, and my husband hasn\'t came home. I need your help. My husband has been gone for days. Last time he took the wagon to grab lumber. Please find him.', 'lightblue', 'Julie', 'media/profileLady.png', 'Help her?', 'Deny the quest');
            
        }, 2000);

    }
    function ignore () {
        characters('Hopefully she goes away...','#003356', 'Hero',  'media/transparent.png');

    }

    




    // let optionOne = document.getElementById('buttonOne');
    // let optionTwo = document.getElementById('buttonTwo');
    // characters('hello', 'gray', 'media/frame-1.png')
    //optionOne.addEventListener('click', battleScene)


}

var enemies = []
function battleScene(enemyNumber, name, enemydamage, enemyHealth, teamNumber, teamName, classScenario) {
    var scenario = document.getElementsByClassName(classScenario)[0].style.display = 'initial';
    // var hideScenario = document.getElementsByClassName(hideclassScenario)[0].style.display = 'none';
    var hideSceneOne = document.getElementsByClassName('village')[0].style.display = 'none';
    
    let attackButton = document.getElementById('attack');
    // let healButton = document.getElementById('heal');
    
    
    
    var enemiesHealth = document.getElementsByClassName('enemyHealthBar')[0];
    for (let i = 0; i < enemyNumber; i++) {
            var enemyDetails = {};
            const element = enemyNumber[i];
            let row = document.createElement('div')
            row.className = 'row enemyText';
            enemiesHealth.appendChild(row)
            let healthbox = document.createElement('div');
            healthbox.className = 'healthbox col-sm-5 col-xs-3'
            healthbox.setAttribute('value', enemyHealth);
            row.appendChild(healthbox);
            healthbox = enemyNumber;
            let enemyName = document.createElement('p');
            enemyName.setAttribute('data-enemy', [i]);
            enemyName.className = 'col-sm-6 col-xs-3 enemyTextName'
            row.appendChild(enemyName);
            enemyName.innerHTML = name;

            let numberHealth = document.getElementsByClassName('healthbox')[i].getAttribute('value');
            enemyDetails.name = name + ' ' + i;
            enemyDetails.maxHealth = numberHealth;
            enemyDetails.health = numberHealth;
            enemyDetails.attack = enemydamage
            enemies.push(enemyDetails);
            // enemies.push = element;
            console.log(enemies)

        }
        var heroes = []
        
        let herosHealth = document.getElementsByClassName('yourHealthBar')[0];
        for (let i = 0; i < teamNumber; i++) {
            var heroDetails = {}
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
        for (let i = 0; i < enemynodeList.length ; i++) { 
            enemynodeList[i].addEventListener('click', function attackingEnemy() {
                
                if (no) {
                    
                    let enemy = event.target.getAttribute('data-enemy') * 1;

                    enemies[enemy].health -= heroes[0].attack;
                    enemynodeList[enemy].querySelector('.healthbox').setAttribute('value', enemies[enemy].health - heroes[0].attack);
                    if (parseInt(enemies[enemy].health) < parseInt(enemies[enemy].maxHealth * .25)) {
                        enemynodeList[enemy].querySelector('.healthbox').style.backgroundColor = 'red';
                    }
                    else if (parseInt(enemies[enemy].health) < parseInt(enemies[enemy].maxHealth * .50)) {
                        enemynodeList[enemy].querySelector('.healthbox').style.backgroundColor = 'orange';
                    }
                    else if (parseInt(enemies[enemy].health) < parseInt(enemies[enemy].maxHealth * .75)) {
                        enemynodeList[enemy].querySelector('.healthbox').style.backgroundColor = 'yellow';
                    }
                    no = false;
                                 
                    for (let j = 0; j < enemyNumber; j++) {
                        const element = enemyNumber[j];
                        if (!no) {
                            function getRandomInt(max) {
                                return Math.floor(Math.random() * Math.floor(max));
                              }
                              let max = getRandomInt(20);
                              debugger
                            if (max == 20) {
                                heroes[0].health -= (2 * enemies[enemy].attack)
                                console.log(heroes[0].health);
                                
                            } else if (max < 20 && max >= 13) {
                                heroes[0].health -= enemies[enemy].attack
                                console.log(heroes[0].health);

                            } else if (max < 13) {
                                heroes[0].health -= 0
                                console.log(heroes[0].health); 

                            }
                        }
                        //make a switch and make a miss with .random
                    }//End of enemy turn
                }//Conditional End
            });//eventlistender End
        }//for loop End
    }//Function initateBattle
}//Function Battlescene End
// battleScene(2, 'skeleton', 5, 50, 1, 'Heroes', 'fightSceneOne' )
// battleScene(1, 'yo', 2, 1, 'Heroes', 'fightSceneTwo','fightSceneOne' )

