let background = document.getElementById('background');
let road = document.getElementById('road');
// generate lines


let generateLine = function () {
    //first and 2nd lane partition
    for (let i = 0; i < 15; i++) {
        let partitions = document.createElement('div');
        partitions.setAttribute("class", "partition-block");
        partitions.y= (i * 70)
        partitions.style.top =  partitions.y + "px";
        road.appendChild(partitions);
    }

    //second and third line partition
    for (let i = 0; i < 15; i++) {
        let partitions = document.createElement('div');
        partitions.setAttribute("class", "partition-block");
        partitions.y= (i * 70)
        partitions.style.top =  partitions.y + "px";
        partitions.style.marginLeft = "400px"
        road.appendChild(partitions);
    }
}

//need to animate now
function moveBlocks() {
    let partitionBlocks = document.querySelectorAll('.partition-block');
    partitionBlocks.forEach((e) => {
        if(e.y> 615 ){
            e.y -= 700;
        }
        // console.log(e.style.top)
        e.y += BACKGROUNDSPEED;
        e.style.top = e.y+"px"
        // console.log(5+ parseInt(e.style.top))
        // console.log(parseInt(e.style.top))
    })

}