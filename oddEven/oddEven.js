oddEven(10)

function oddEven(number){
for(let i=0; i<= number;i++){
    // if(i % 2 === 0){
    //     console.log(i,"Even")
    // }
    // else{
    //     console.log(i,"odd")
    // }
    const message = (i % 2 === 0) ? "Even Number" : "Odd Number"
    console.log(i," "+message)
}
}