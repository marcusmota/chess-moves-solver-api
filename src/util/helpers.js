const movesUp = (times, letter, num, hash) => {

    if(num + times > hash.rows){
        return null;
    }

    for(let k=0; k < times; k++){
        num++;
    };

    return letter+num;

};

const movesDown = (times, letter, num, hash) => {

    if(num - times < 1){
        return null;
    }
    
    for(let k=0; k < times; k++){
        num--;
    };

    return letter+num;

};

const movesLeft = (times, letter, num, hash) => {
    let i = hash.columns.indexOf(letter);
    let count = hash.columns.length;

    if(i - times < 0){
        return null;
    }
    
    for(let k=0; k < times; k++){
        i--;
    };

    return hash.columns[i]+num;
};

const movesRight = (times, letter, num, hash) => {

    let i = hash.columns.indexOf(letter);
    let count = hash.columns.length;

    if(i + times > count){
        return null;
    }
    
    for(let k=0; k < times; k++){
        i++;
    };

    return hash.columns[i]+num;
};

module.exports = {
    movesUp,
    movesDown,
    movesLeft,
    movesRight
}