const movesUp = (times, letter, num, hash) => {

    let tmpNum = parseInt(num, 10);

    if(tmpNum + times > hash.rows){
        return null;
    }

    for(let k=0; k < times; k++){
        tmpNum++;
    };

    return letter+tmpNum;

};

const movesDown = (times, letter, num, hash) => {

    let tmpNum = parseInt(num, 10);

    if(tmpNum - times < 1){
        return null;
    }
    
    for(let k=0; k < times; k++){
        tmpNum--;
    };

    return letter+tmpNum;

};

const movesLeft = (times, letter, num, hash) => {

    let tmpNum = parseInt(num, 10);

    let i = hash.columns.indexOf(letter);

    if(i - times < 0){
        return null;
    }
    
    for(let k=0; k < times; k++){
        i--;
    };

    return hash.columns[i]+tmpNum;
};

const movesRight = (times, letter, num, hash) => {

    let tmpNum = parseInt(num, 10);

    let i = hash.columns.indexOf(letter);
    let count = hash.columns.length;

    if(i + times > count){
        return null;
    }
    
    for(let k=0; k < times; k++){
        i++;
    };

    return hash.columns[i]+tmpNum;
};

module.exports = {
    movesUp,
    movesDown,
    movesLeft,
    movesRight
}