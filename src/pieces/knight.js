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

const getKnightFullMoves = (pos, chessHash) => {
    
    const moves = {};

    moves['uur'] = (UURFull(pos, chessHash));
    moves['uul'] = (UULFull(pos, chessHash));
    moves['ddr'] = (DDRFull(pos, chessHash));
    moves['ddl'] = (DDLFull(pos, chessHash));
    moves['rru'] = (RRUFull(pos, chessHash));
    moves['rrd'] = (RRDFull(pos, chessHash));
    moves['llu'] = (LLUFull(pos, chessHash));
    moves['lld'] = (LLDFull(pos, chessHash));

    return moves;

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
    getKnightFullMoves
}