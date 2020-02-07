


function menu() {
    //Want to add transition to buttons and changes.
    //D20 dice?? 
    
    //Hide everything beside the menu.
    var startGame = document.getElementById('startGame');
    var hideInstructions = document.getElementsByClassName('instructions')[0].style.display = 'none';
    var hideSceneOne = document.getElementsByClassName('village')[0];
    var hideFightOne = document.getElementsByClassName('fightSceneContainer')[0].style.display = 'none';
    var hideFightTwo = document.getElementsByClassName('fightSceneContainer')[1].style.display = 'none';
    var hideSceneTransition = document.querySelector('.villageSceneTransition');
    var background = document.querySelector('body');
    var instructions = document.getElementById('instructions');
    var backToMenu = document.getElementById('backToMenu');
    document.querySelector('.menuButtons').className = 'menuButtons sceneTransition';
    document.querySelector('.endingOne').style.display = 'none';
    document.querySelector('.dungeonBeginning').style.display = 'none';
    document.querySelector('.dungeon').style.display = 'none';
    document.querySelector('.dungeonSceneTransition').style.display = 'none';
    document.querySelector('.dungeonFightSceneTransition').style.display = 'none';
    startGame.addEventListener('click', clearMenu);
    instructions.addEventListener('click', instructionMenu);
    backToMenu.addEventListener('click', sendToMenu);
    hideSceneOne.style.display = 'none';
    hideSceneTransition.style.display = 'none';
    
    
    function clearMenu() {
        var hideMenu = document.getElementsByClassName('menu')[0].style.display = 'none';
        var rowSceneOne = document.querySelector('.village .gameSceneOne');
        hideSceneTransition.style.display = 'initial';
        background.style.backgroundColor = 'black'
        village();
        hideSceneOne.style.display = 'none';
        hideSceneTransition.className = 'sceneTransition'
        setTimeout(() => {
        hideSceneOne.style.display = 'initial';
        hideSceneTransition.style.display = 'none';
        rowSceneOne.className = 'row gameSceneOne villageFadingIn'
        }, 5000);

        return hideMenu + background;
    }
    
    
    function instructionMenu() {
        let transitionbuttons = document.querySelector('.instructions').className = 'instructions sceneTransition';
        let hideButtons = document.getElementsByClassName('menuButtons')[0].style.display = 'none';
        let showInstructions = document.getElementsByClassName('instructions')[0].style.display = 'block';
        
        return showInstructions + hideButtons;
    }


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

function characters(classScene,text, characterChatColor, name, mediaPath, buttonOne = '' , buttonTwo = '' ) {
    let characterText = document.getElementsByClassName('characterText')[classScene];
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
    characters(0, 'You start to notice you are about to wake up... Do you choose to wake up or sleep more?', 
    'gray',  'Narrator', 'media/transparent.png', 'Wake up', 'Sleep more')
    let wakeUp = document.getElementById('optionOne');
    let sleepMore = document.getElementById('optionTwo');
    wakeUp.addEventListener('click', (event) => { //Decision 1 (Wake up) 
        characters(0, 'I suppose its that time.' , '#003356', 'Hero', 'media/transparent.png')
        document.querySelector('.characterAnimation div').className = 'villageWoman';
        wakeUp.disabled = true;
        sleepMore.disabled = true;
        setTimeout(() => {
            characters(0, 'You began to hear very heavy and rapid knocking and look over.' ,'gray' , 'Narrator', 'media/transparent.png')
            setTimeout(() => {
                characters(0, 'Please please help me. It\'s an emergency!', 'lightblue', 'lady' , 'media/profileLady.png' )
                document.querySelector('.characterAnimation div').className = 'villageWomanBack';

                setTimeout(() => { 
                    characters(0, 'Do you open the door?', 'gray', 'Narrator' , 'media/transparent.png', 'Open the door', 'Ignore it' )
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
    sleepMore.addEventListener('click', () => { //Decision 1 (Sleep more)
        characters(0, 'I think I will stay in bed for a bit more..', '#003356', 'Hero' , 'media/transparent.png');
        sleepMore.disabled = true
        wakeUp.disabled = true;
        document.querySelector('.characterAnimation div').className = 'villageWoman';
        setTimeout(() => {
            characters(0, 'You began to hear very heavy and rapid knocking' ,'gray' , 'Narrator', 'media/transparent.png', 'Get up?', 'ignore it?');
            document.querySelector('.characterAnimation div').className = 'villageWomanBack';
            let getUp = document.querySelectorAll('#optionOne')[1];
            let ignoreWoman = document.querySelectorAll('#optionTwo')[1];
            getUp.addEventListener('click', () => {
                characters(0, 'Hold on I\'m coming to open the door!', '#003356', 'Hero','media/transparent.png'  );
                setTimeout(() => {
                    opening()
                }, 2000);
            });
            ignoreWoman.addEventListener('click', () => {
                characters(0, 'I don\'t want to get involve with her situation..' , ' gray', 'Narrator', 'media/transparent.png');
                setTimeout(() => {
                    ignore();
                }, 2000);
            })

        }, 2000);
    });

    function opening() { 
        characters(0, 'What\'s wrong? Who are you?','#003356', 'Hero',  'media/transparent.png');
        setTimeout(() => {
            characters(0, 'My name is Julie, and my husband hasn\'t came home. I need your help. My husband has been gone for days. Last time he took the wagon to grab lumber. Please find him.', 'lightblue', 'Julie', 'media/profileLady.png', 'Help her?', 'Deny the quest');
            let accept = document.querySelectorAll('#optionOne')[2];
            let deny = document.querySelectorAll('#optionTwo')[2];
            accept.addEventListener('click',  () => {
                characters(0, 'Thank you. Thank you. Thank you. This means so much to me, I could not be more grateful!', 'lightblue', 'Julie', 'media/profileLady.png')
                characters(0, 'You have nothing to worry about. I\'ll do my best to bring him back', '#003356', 'Hero', 'media/transparent.png', 'Continue?');
                accept.disabled = true;
                deny.disabled = true;
                let continueSceneTwo = document.querySelectorAll('#optionOne')[3];
                continueSceneTwo.addEventListener('click',sceneTwo)
            });
            deny.addEventListener('click', () => {
                accept.disabled = true;
                deny.disabled = true;
                characters(0, 'I\'m sorry for bothering you. I haven\'t seen my husband in so long, and I need help.. Since you\'re not here I guess I\'ll do it on my own', 'lightblue', ' Julie', 'media/profileLady.png')
                setTimeout(() => {
                    document.querySelector('.endingOne').style.display = 'initial';
                    document.querySelector('.village').style.display = 'none'
                    document.querySelector('.endingOne').className = 'endingTransition';
                }, 5000);
            });
        }, 2000);

    }
    function ignore () {
        characters(0, 'Hopefully she goes away...','#003356', 'Hero',  'media/transparent.png');
        setTimeout(() => {
            characters(0, 'The rapid knock continues to hit your door. Do you answer?', 'gray', 'Narrator','media/transparent.png', 'Open Door?', 'Continue to ignore?');
            let openDoorFinal = document.querySelectorAll('#optionOne')[2];
            let ignoreFinal = document.querySelectorAll('#optionTwo')[2];
            openDoorFinal.addEventListener('click', () => {
                openDoorFinal.disabled = true;
                ignoreFinal.disabled = true;
                opening()
            });
            ignoreFinal.addEventListener('click',  () => {
                openDoorFinal.disabled = true;
                ignoreFinal.disabled = true;
                characters(0, 'I\'m sorry for bothering you. I haven\'t seen my husband in so long, and I need help.. Since you\'re not here I guess I\'ll do it on my own', 'lightblue', ' Julie', 'media/profileLady.png')
                setTimeout(() => {
                    document.querySelector('.endingOne').style.display = 'initial';
                    document.querySelector('.village').style.display = 'none'
                    document.querySelector('.endingOne').className = 'endingTransition';
                }, 5000);
            })
        }, 2000);
    }


} //End of Scene One


function sceneTwo() {
    let hideSceneOne = document.getElementsByClassName('village')[0];
    let hideSceneTwo = document.querySelector('.dungeonSceneTransition');
    let dungeonSwitch = document.querySelector('.dungeonBeginning');
    let dungeonSwitchText = document.querySelector('.dungeonBeginning .col-sm-12');
    let rowSceneTwo = document.querySelector('.dungeon .gameSceneTwo');
    hideSceneOne.style.display = 'none';
    dungeonSwitch.style.display = 'initial'
    dungeonSwitch.className = 'dungeonBeginning dungeonTransition'

    let dungeonText = document.createElement('p');
    dungeonText.innerHTML = 'As you walk towards the direction of the way Julie pointed, you decide to sit down and take a break. As you sit down down, you black out. You wake up with a big headache in some kind of dungeon.'
    dungeonSwitchText.appendChild(dungeonText);
    setTimeout(() => {
        dungeonSwitch.style.display = 'none'
        hideSceneTwo.style.display = 'initial';
        hideSceneTwo.className = 'sceneTransition'
        document.querySelector('.dungeon').style.display = 'none'
        setTimeout(() => {
            hideSceneTwo.style.display = 'none'
            document.querySelector('.dungeon').style.display = 'initial'
            rowSceneTwo.className = 'row gameSceneTwo villageFadingIn'
            setTimeout(() => {
                characters(1, 'Where am i..?', '#003356','Hero', 'media/transparent.png')
                setTimeout(() => {
                    dungeonDialogue();
                }, 3000);
            }, 3000);
        }, 3000);
    }, 9000);
    function dungeonDialogue() {
        characters(1, 'You look around to observe your surroundings, and as you turn your head you see a man stuck under a wagon. He slowly lifts his head up', 'gray', 'Narrator', 'media/transparent.png')
        setTimeout(() => {
            characters(1, 'Oh. Hello there. I\'m a little stuck. I\'m also can\'t feel my legs. A little help would be nice.', '#61706C', 'Man', 'media/profileMan.png', 'Help?', 'Ask a question.')
            let help = document.querySelectorAll('.dungeon #optionOne')[0];
            let question = document.querySelectorAll('.dungeon #optionTwo')[0];
            help.addEventListener('click', function helpMan () {
                help.disabled = true;
                question.disabled = true;
                characters(1, 'Oh, thank you for getting me out! I\'m not able to walk though you could help me.','#61706C','Man','media/profileMan.png')
                setTimeout(() => {
                    dungeonDoorOpen();
                }, 4000);
            });
            question.addEventListener('click', () => {
                help.disabled = true;
                question.disabled = true;
                characters(1, 'Shouldn\'t you help me first? Please?','#61706C', 'Man', 'media/profileMan.png' );
                setTimeout(() => {
                    dungeonDoorOpen()
                }, 3000);
            });
        }, 2000);
    }

    function dungeonDoorOpen() {
        characters(1, 'No worries, what is your name and where are we?', '#003356','Hero','media/transparent.png')
        setTimeout(() => {
            characters(1, 'Oh my name is William, and I\'m not sure but it isn\'t a good place. These people with robes roam here and they don\'t look friendly.','#61706C', 'William', 'media/profileMan.png');
            setTimeout(() => {
                characters(1,'Have you figured out a way to get out william?', '#003356','Hero','media/transparent.png');
                setTimeout(() => {
                    characters(1, 'I haven\'t been able to try I\'ve been under a wagon, but you can check that door','#61706C', 'William', 'media/profileMan.png');
                    setTimeout(() => {
                        characters(1, 'Do you try to break the door down or just open it.', 'gray', 'Narrator', 'media/transparent.png', 'Break Down', 'Push on it');
                        let breakDown = document.querySelectorAll('.dungeon #optionOne')[1];
                        let push = document.querySelectorAll('.dungeon #optionTwo')[1];
                        breakDown.addEventListener('click', () => {
                            characters(1, 'You decided to kick the door and make a loud noise. The people in the robes come in and now you must fight! Prepare yourself!', 'gray', 'Narrator', 'media/transparent.png', 'Continue')
                            let fightOne = document.querySelectorAll('.dungeon #optionOne')[2];

                            fightOne.addEventListener('click', () => {
                                battleScene(2, 'skeleton', 5, 50, 1, 'Heroes', 0 )
                            })
                        })
                    }, 3000);//door choice
                }, 3000);//William can't open the door.
            }, 3000); // Asking William if he's tried to open the door
        }, 3000);//What his name is.
    }
    
    

}

var enemies = []
function battleScene(enemyNumber, name, enemydamage, enemyHealth, teamNumber, teamName, fightScene) {
    var scenario = document.getElementsByClassName('fightSceneContainer')[fightScene].style.display = 'initial';
    var hideSceneOne = document.getElementsByClassName('dungeon')[0].style.display = 'none';
    
    let attackButton = document.getElementById('attack');
    
    
    
    var enemiesHealth = document.getElementsByClassName('enemyHealthBar')[fightScene];
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
        
        let herosHealth = document.getElementsByClassName('yourHealthBar')[fightScene];
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
    let no = true;

    function initiateBattle () { 
        let enemynodeList = document.querySelectorAll('.enemyText');
        let textAttackBox = document.querySelectorAll('.action')[fightScene]
        let textAttack;
        for (let i = 0; i < enemynodeList.length ; i++) { 
            
            enemynodeList[i].addEventListener('click', function attackingEnemy() {
                if (no) {
             
                    no = false
                    
                    let enemy = event.target.getAttribute('data-enemy') * 1;

                    enemies[enemy].health -= heroes[0].attack;
                    textAttack = 'The Hero landed a hit on Skeleton ' + [enemy + 1]; 
                    textAttackBox.innerHTML += textAttack + '<br>'

                    enemynodeList[enemy].querySelector('.healthbox').setAttribute('value', enemies[enemy].health - heroes[0].attack);
                    if (parseInt(enemies[enemy].health) <= parseInt(enemies[enemy].maxHealth * 0)) {
                        enemynodeList[enemy].querySelector('.healthbox').style.backgroundColor = 'black';
                        textAttack = 'Skeleton ' + [enemy] + ' has been defeated.'
                        textAttackBox.innerHTML += textAttack + '<br>'
                        enemynodeList[enemy].removeEventListener('click', attackingEnemy)
                        // if (enemies[0].health <= 0 && enemies[1].health <= 0) {
                        //     var scenario = document.getElementsByClassName('fightSceneContainer')[fightScene].style.display = 'none';
                        //     let gameover = document.getElementsByClassName('dungeonFightSceneTransition')[0];
                        //     let gameoverLetters = document.createElement('h1')
                        //     gameoverLetters.innerHTML = 'Gameover'
                        //     gameover.appendChild(gameoverLetters)
                        //     gameoverLetters.className = 'dungeonLevelClear'
                        //     gameover.display = 'initial'
                        // }

                    }
                    else if (parseInt(enemies[enemy].health) < parseInt(enemies[enemy].maxHealth * .25)) {
                        enemynodeList[enemy].querySelector('.healthbox').style.backgroundColor = 'red';
                        textAttack = 'Skeleton ' + [enemy] + ' is barely able to stand.'
                        textAttackBox.innerHTML += textAttack + '<br>'

                    }
                    else if (parseInt(enemies[enemy].health) < parseInt(enemies[enemy].maxHealth * .50)) {
                        enemynodeList[enemy].querySelector('.healthbox').style.backgroundColor = 'orange';
                        textAttack = 'Skeleton ' + [enemy] + ' is looking pretty rough'
                        textAttackBox.innerHTML += textAttack + '<br>'

                    }
                    else if (parseInt(enemies[enemy].health) < parseInt(enemies[enemy].maxHealth * .75)) {
                        enemynodeList[enemy].querySelector('.healthbox').style.backgroundColor = 'yellow';
                        textAttack = 'Skeleton ' + [enemy] + ' is looking okay but not the best'
                        textAttackBox.innerHTML += textAttack + '<br>'
                    }

                                 
                    for (let j = 0; j < enemyNumber; j++) {
                        const element = enemyNumber[j];
                        if (!no) {
                            function getRandomInt(max) {
                                return Math.floor(Math.random() * Math.floor(max));
                              }

                              let max = getRandomInt(20);
                            //   debugger
                            if (max == 20) {
                                heroes[0].health -= (2 * enemies[enemy].attack);
                                textAttack = 'Enemy '+ [j] + ' got lucky and hit you twice the amount of damage!';
                                textAttackBox.innerHTML += textAttack + '<br>';
                                
                            } else if (max < 20 && max >= 13) {
                                heroes[0].health -= enemies[enemy].attack
                                textAttack = 'Enemy '+ [j] + ' hit you with ' + enemies[enemy].attack + ' the amount of damage!';
                                textAttackBox.innerHTML += textAttack + '<br>';
                                


                            } else if (max < 13) {
                                heroes[0].health -= 0
                                textAttack = 'Enemy '+ [j] + ' missed his attack.';
                                textAttackBox.innerHTML += textAttack + '<br>';
                            }
                            textAttack = 'You are left with ' + heroes[0].health + ' health.'
                            textAttackBox.innerHTML += textAttack + '<br>';
                            
                        }
                        //make a switch and make a miss with .random
                    }//End of enemy turn
                }//Conditional End
            });//eventlistender End
        }//for loop End
        no = true;
    }//Function initateBattle
}//Function Battlescene End
// battleScene(2, 'skeleton', 5, 20, 1, 'Heroes', 0 )
// battleScene(1, 'yo', 2, 50,  1, 'Heroes', 1 )

