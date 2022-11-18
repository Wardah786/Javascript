
function starsFrame() {
    let user;
    do {
        user = prompt('Several commas in words');
    } while (user.length == 0);
    const Array = user.split(',');


    for (const wordIndex in Array) {
        if (Object.prototype.hasOwnProperty.call(Array, wordIndex)) {
            Array[wordIndex] = Array[wordIndex].trim();
        }
    }

    const lengthOfLongestWord = findLongestWordLength(Array);


    drawStarFrameAroundWords(Array, lengthOfLongestWord);
}

function findLongestWordLength(Array) {
    let lengthOfLongestWord = 0;
    for (let x of Array) {
        x = x.trim();
        if (x.length > lengthOfLongestWord) {
            lengthOfLongestWord = x.length;
        }
    }
    return lengthOfLongestWord;
}

function drawStarFrameAroundWords(Array, lengthOfLongestWord) {


    console.log('*'.repeat(lengthOfLongestWord + 4));


    for (let i = 0; i < Array.length; i++) {
        console.log('* ' + Array[i] + ' '.repeat(lengthOfLongestWord - Array[i].length) + ' * ');
    }


    console.log('*'.repeat(lengthOfLongestWord + 4));
}

starsFrame();