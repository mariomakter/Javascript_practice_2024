function isPalindrome(word){
    const normalizedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversedWord = normalizedWord.split('').reverse().join('');

    return normalizedWord === reversedWord ;
}

console.log(isPalindrome('madam'));