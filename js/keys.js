let keys ={
    ArrowLeft : false,
    ArrowRight : false
}

document.addEventListener('keyup', keyUp);
document.addEventListener('keydown', keyDown);


function keyDown(e){
    e.preventDefault();
    keys[e.key] = true;
}

function keyUp(e){
    e.preventDefault();
    keys[e.key] = false;

}

