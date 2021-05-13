clickStart = document.getElementById('start')




//generate lane lines
generateLine();

let myCar = document.querySelector('.mycar')
function startMoveAssets() {
    moveBlocks(); //lane blocks animate
    moveCars();
    // console.log('hi')
    if(keys.ArrowLeft && Player.x > 360){Player.x-=25}
    if(keys.ArrowRight && Player.x < 880){Player.x+=25}
    
    myCar.style.left = Player.x +'px';
    // Player.start = true;
    window.requestAnimationFrame(startMoveAssets);

}

// if(Player.start){

// }
Player.x = myCar.offsetLeft;
let startGame = function(){
    window.requestAnimationFrame(startMoveAssets);
    clickStart.style.display = "none";
}

if(Player.play){
window.addEventListener('click', startGame)
}
