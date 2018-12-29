const chessController = require("./../controllers/chess");

module.exports = function(app){

    app.get('/v1/get-moves-by-position/:piece', chessController.getAvailableMovesByPosition);
    app.get('/v1/could-move/:piece', chessController.getCouldMove);
  
};

