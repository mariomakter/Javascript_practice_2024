function isPalindrome(str_entry){
      // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str_entry.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var ccount = 0;

    if(cleanStr === ""){
        console.log("Nothing Found");
        return false;
    }

    if((cleanStr.length)%2 === 0){
        ccount = (cleanStr.length)/2;
    }
    else{
        if(cleanStr.length === 1){
            console.log("Entry is a Palindrome. ");
        }
        else{
            ccount = (cleanStr.length-1)/2;
        }
    }
for(var x = 0; x<ccount; x++){
    if(cleanStr[x] != cleanStr.slice(-1 -x)[0]){
        console.log("Entry is not plaindrome");
        return false;
    }
}
console.log("The Entry is a Plaindrome.");
return true;
}

isPalindrome('madam');
isPalindrome('fox');