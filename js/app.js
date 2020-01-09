
function menu() {
    var startGame = document.getElementById('startGame');
    startGame.addEventListener('click', village)
    
    function village() {
        var hideMenu = document.getElementsByClassName('menu')[0].style.visibility = 'hidden';
        var background = document.querySelector('body').style.backgroundColor = 'white'
    
        
        return hideMenu + background;
    }
    
    function instructions() {
        
    }
}
menu();