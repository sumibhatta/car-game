
//mycar
let mycar = document.createElement('div');
mycar.setAttribute('class', 'mycar');
road.appendChild(mycar);


let lanes = [430, 640, 850];
let gameScore = 1;
//their cars
let generateCars = function () {
    for (let i = 0; i < 3; i++) {
        let car = document.createElement('div');
        car.setAttribute('class', 'car');
        car.y = (i * 300)
        car.style.left = lanes[Math.floor(Math.random() * lanes.length)] + "px";
        // console.log(car.style.left)
        car.style.top = car.y + "px";
        car.style.backgroundImage = "url(./assets/car" + Math.floor((Math.random() * 3) + 1) + ".png)"
        // car.style.backgroundColor = "blue";

        road.appendChild(car);
    }
}

// background-repeat: no-repeat;
// background-size: 100% 100%;


generateCars()

let triggerOnce = true;
function moveCars() {
    let cars = document.querySelectorAll('.car');

    cars.forEach((car) => {
        if (triggerOnce) {
            if (collisionDetection(mycar, car)) {
                alert()
                triggerOnce = false;
                window.cancelAnimationFrame()
            }

        };
        if (car.y > 615) {
            car.y -= 700;
            car.style.left = lanes[Math.floor(Math.random() * lanes.length)] + "px";

        }
        // console.log(e.style.top)
        car.y += ENEMYSPEED;
        gameScore +=Math.ceil(ENEMYSPEED*0.500)/(600);
        // console.log('game', gameScore))
        score.innerHTML = Math.ceil(gameScore);
        car.style.top = car.y + "px"
        // console.log(5+ parseInt(e.style.top))
        // console.log(parseInt(e.style.top))
    })

}