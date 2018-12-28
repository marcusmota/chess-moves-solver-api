const knightPiece = require("../pieces/knight");
const helpers = require("../util/helpers");

const chessHash = {
    columns : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    rows : 8
};

const calculateMoves = (piece, position) => {

    let availableMoves = [];

    if(piece === 'KNIGHT'){

        let moves = {
            uur : true,
            uul : true,
            ddr : true,
            ddl : true,
            rru : true,
            rrd : true,
            llu : true,
            lld : true
        };
        
        let letter = helpers.getFirstPositionCharacter(position);
        let num = helpers.getSecondPositionCharacter(position);

        if(letter === 'A' ){
            delete moves.uul;
            delete moves.ddl;
            delete moves.llu;
            delete moves.lld;
        }else if(letter === 'B'){
            delete moves.lld;
            delete moves.llu;
        }else if(letter === 'G'){
            delete moves.rrd;
            delete moves.rru;
        }else if(letter === 'H'){
            delete moves.ddr;
            delete moves.uur;
            delete moves.rru;
            delete moves.rrd;
        }

        if(num === 1){
            delete moves.rrd;
            delete moves.lld;
            delete moves.ddr;
            delete moves.ddl;
        }else if(num === 2){
            delete moves.ddr;
            delete moves.ddl;
        }else if(num === 7){
            delete moves.uur;
            delete moves.uul;
        }else if(num === 8){
            delete moves.rru;
            delete moves.llu;
            delete moves.uur;
            delete moves.uul;
        }
        
        availableMoves = knightPiece.getKnightMoves(moves, position, chessHash);
    
    }else{
        return res.status(422).send({msg : "Please, given a valid chess piece. Ex.: Knight"})
    }
    
    let arrayOfMoves = [];
    
    Object.keys(availableMoves).map(f => {
        arrayOfMoves.push(availableMoves[f])
    })

    return arrayOfMoves;
};


const getAvailableMovesByPosition = (req,res) => {

    let position = req.query.position ? req.query.position.toUpperCase() : req.query.position;

    let piece = req.params.piece ? req.params.piece.toUpperCase() : req.params.piece;

    let times = req.query.times ? req.query.times : 1;
    
    if(!(/^[a-h|A-H]([0-8]{1})$/).test(position)){
        return res.status(422).send({msg : "Please, given a valid chess position. Ex.: A1, C8, H3..."})
    }

    let result = [];

    let resultBkp = [];

    result = calculateMoves(piece, position);

    resultBkp = result;

    for(let m=1;m<times;m++){

        let tmpArr = [];

        result.forEach(v => {

            let tmpPos = getLastPosition(v);

            resultBkp = resultBkp.concat(calculateMoves(piece, tmpPos));
            tmpArr = tmpArr.concat(calculateMoves(piece, tmpPos));

        });

        result = tmpArr;
    }

    result = resultBkp;

    res.send(result);

};

const getLastPosition = (arr) => {
    return arr[arr.length-1];
};

module.exports = {
    getAvailableMovesByPosition
}