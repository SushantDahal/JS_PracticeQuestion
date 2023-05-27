function convertInto_second(hour){
    const one_min = 60;
    const one_hour = 60;

    return hour *one_min*one_hour
}

const hours = -10;
if(hours <= 0){
    console.log("Hours must be the positive Number")
    return hours

}
else
convert = convertInto_second(hours)
console.log(convert)