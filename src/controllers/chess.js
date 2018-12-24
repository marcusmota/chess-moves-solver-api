const knightPiece = require("../pieces/knight");
const helpers = require("../util/helpers");

const chessHash = {
    columns : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    rows : 8
};

const getAvailableMovesByPosition = (req,res) => {

    let availableMoves = [];

    if(req.params.piece === 'knight'){

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
        
        let letter = helpers.getFirstPositionCharacter(req.query.position);
        let num = helpers.getSecondPositionCharacter(req.query.position);

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
        
        availableMoves = knightPiece.getKnightMoves(moves, req.query.position, chessHash);
    }
    
    let arrayOfMoves = [];
    
    Object.keys(availableMoves).map(f => {
        arrayOfMoves.push(availableMoves[f])
    })

    res.send(arrayOfMoves);

};

module.exports = {
    getAvailableMovesByPosition
}