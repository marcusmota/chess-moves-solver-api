const helpers = require("../../src/util/helpers");

const UUR = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesUp(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesRight(1, col, row, chessHash);

    return result;

};

const UUL = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesUp(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesLeft(1, col, row, chessHash);

    return result;
};

const DDR = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesDown(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesRight(1, col, row, chessHash);

    return result;
};

const DDL = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesDown(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesLeft(1, col, row, chessHash);

    return result;
};

const RRU = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesRight(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesUp(1, col, row, chessHash);

    return result;
};

const RRD = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesRight(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesDown(1, col, row, chessHash);

    return result;
};

const LLU = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesLeft(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesUp(1, col, row, chessHash);

    return result;
};

const LLD = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesLeft(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesDown(1, col, row, chessHash);

    return result;
};

const UURFull = (pos, chessHash) => {

    const moves = [];

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesUp(1, col, row, chessHash);
    moves.push(result);

    result = helpers.movesUp(2, col, row, chessHash);
    moves.push(result);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesRight(1, col, row, chessHash);

    moves.push(result);

    return moves;

};

const UULFull = (pos, chessHash) => {

    const moves = [];

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesUp(1, col, row, chessHash);
    moves.push(result);

    result = helpers.movesUp(2, col, row, chessHash);
    moves.push(result);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesLeft(1, col, row, chessHash);
    moves.push(result);

    return moves;
};

const DDRFull = (pos, chessHash) => {

    const moves = [];

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesDown(1, col, row, chessHash);
    moves.push(result);

    result = helpers.movesDown(2, col, row, chessHash);
    moves.push(result);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesRight(1, col, row, chessHash);
    moves.push(result);

    return moves;
};

const DDLFull = (pos, chessHash) => {

    const moves = [];

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesDown(1, col, row, chessHash);
    moves.push(result);
    result = helpers.movesDown(2, col, row, chessHash);
    moves.push(result);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesLeft(1, col, row, chessHash);
    moves.push(result);

    return moves;
};

const RRUFull = (pos, chessHash) => {

    const moves = [];

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesRight(1, col, row, chessHash);
    moves.push(result);

    result = helpers.movesRight(2, col, row, chessHash);
    moves.push(result);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesUp(1, col, row, chessHash);
    moves.push(result);

    return moves;
};

const RRDFull = (pos, chessHash) => {

    const moves = [];

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesRight(1, col, row, chessHash);
    moves.push(result);

    result = helpers.movesRight(2, col, row, chessHash);
    moves.push(result);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesDown(1, col, row, chessHash);
    moves.push(result);

    return moves;
};

const LLUFull = (pos, chessHash) => {

    const moves = [];

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesLeft(1, col, row, chessHash);
    moves.push(result);

    result = helpers.movesLeft(2, col, row, chessHash);
    moves.push(result);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesUp(1, col, row, chessHash);
    moves.push(result);

    return moves;
};

const LLDFull = (pos, chessHash) => {

    const moves = [];

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesLeft(1, col, row, chessHash);
    moves.push(result);

    result = helpers.movesLeft(2, col, row, chessHash);
    moves.push(result);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    result = helpers.movesDown(1, col, row, chessHash);
    moves.push(result);

    return moves;
};

const getKnightMoves = (moves, pos, chessHash) => {

    const availableMoves = {};

    if(moves.uur){
        availableMoves['uur'] = UURFull(pos, chessHash);
    }

    if(moves.uul){
        availableMoves['uul'] = UULFull(pos, chessHash);
    }

    if(moves.ddr){
        availableMoves['ddr'] = DDRFull(pos, chessHash);
    }

    if(moves.ddl){
        availableMoves['ddl'] = DDLFull(pos, chessHash);
    }

    if(moves.llu){
        availableMoves['llu'] = LLUFull(pos, chessHash);
    }

    if(moves.lld){
        availableMoves['lld'] = LLDFull(pos, chessHash);
    }

    if(moves.rru){
        availableMoves['rru'] = RRUFull(pos, chessHash);
    }

    if(moves.rrd){
        availableMoves['rrd'] = RRDFull(pos, chessHash);
    }
    
    return availableMoves;
};

module.exports = {
    UUR, UUL,
    DDR, DDL,
    LLU, LLD,
    RRU, RRD,
    UURFull, UULFull,
    DDRFull, DDLFull,
    LLUFull, LLDFull,
    RRUFull, RRDFull,
    getKnightMoves
}