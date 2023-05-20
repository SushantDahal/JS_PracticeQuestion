checkSpeed(75);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
if(speed < speedLimit + kmPerPoint){
    console.log("Speed is Ok")
    return;
}
// else{
    const point = Math.floor((speed - speedLimit)/kmPerPoint)
    if(point >= 12){
        console.log("Your license is suspended")
    }
    else{
        console.log("Your Point: ",point)
    }

}
// }