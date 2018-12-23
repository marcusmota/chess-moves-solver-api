const helpers = require("../../src/util/helpers");

const UUR = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesUp(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    const res = helpers.movesRight(1, col, row, chessHash);

    return res;

};

const UUL = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesUp(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    const res = helpers.movesLeft(1, col, row, chessHash);

    return res;
};

const DDR = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesDown(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    const res = helpers.movesRight(1, col, row, chessHash);

    return res;
};

const DDL = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesDown(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    const res = helpers.movesLeft(1, col, row, chessHash);

    return res;
};

const RRU = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesRight(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    const res = helpers.movesUp(1, col, row, chessHash);

    return res;
};

const RRD = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesRight(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    const res = helpers.movesDown(1, col, row, chessHash);

    return res;
};

const LLU = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesLeft(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    const res = helpers.movesUp(1, col, row, chessHash);

    return res;
};

const LLD = (pos, chessHash) => {

    let col = helpers.getFirstPositionCharacter(pos);
    let row = helpers.getSecondPositionCharacter(pos);

    let result = helpers.movesLeft(2, col, row, chessHash);

    col = helpers.getFirstPositionCharacter(result);
    row = helpers.getSecondPositionCharacter(result);

    const res = helpers.movesDown(1, col, row, chessHash);

    return res;
};

module.exports = {
    UUR, UUL,
    DDR, DDL,
    LLU, LLD,
    RRU, RRD
}