function collisionDetection(mycar, enemycar){
    mycar = mycar.getBoundingClientRect();
    enemycar = enemycar.getBoundingClientRect();

    if(!((mycar.bottom<enemycar.top) || (mycar.top>enemycar.bottom) || (mycar.right<enemycar.left) ||(mycar.left>enemycar.right)) ){
        return true;
    }

    // if((mycar.top>enemycar.bottom) && (((mycar.left+mycar.width)<enemycar.left) || (mycar.right>enemycar.right)) ){
    //     console.log('collision')
    // }
}

// 