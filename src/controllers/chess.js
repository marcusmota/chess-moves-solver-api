
const chessHash = {
    columns : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    rows : 8
};

const getFirstPositionCharacter = (pos) => {
    if(pos && pos.length > 0){
        return pos[0];
    }

    return null;
};

const getSecondPositionCharacter = (pos) => {
    if(pos && pos.length > 1){
        return pos[1];
    }

    return null;
};




module.exports = {
    getFirstPositionCharacter,
    getSecondPositionCharacter
}