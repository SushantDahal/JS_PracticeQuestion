// First revrse the string and join it
//if reverse string is equal to previous string then it is a palindrome
palindrome("mam")
function palindrome(str){
    const reversed = str.split('').reverse().join('');
    // return str === reversed
    if(str === reversed)
        console.log("Palindrome");
    else
        console.log("Not palindrome")   

}

  