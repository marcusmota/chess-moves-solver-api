
# Chess Moves Solver API

It`s an API to give to the user the availables Chess moves to a given piece.

### Installing

Follow these steps to install the API


```
git clone git@github.com:marcusmota/chess-moves-solver-api.git
```

And then, these following instructions to install the project dependencies

```
cd chess-moves-solver-api && npm install && npm run dev
```

If everthing works fine the API will run in port 6060 with this message

```
===================
APP: Chess Moves Solver
PORTA: 6060
DATA: 2018-12-24T16:04:07.387Z
===================
```

## Running the tests

To run the unit test just run npm run test-unit, to run the integration tests run test-integration

### Project Structure Explain

The file `index.js` is the application boostrap

The file `src/app.js` is the application main file

The folder `test` is folder with unit and integration tests

The folder `src/controllers` is the application controllers 

The file `src/controllers/chess.js` is the chess controller, it has the following functions

```
getAvailableMovesByPosition - it receive as req.query.position and req.query.turns (number of the turns that you want to 'skip') and as req.params.piece the name of the piece in this case 'KNIGHT' and return the possible moves from a given position

getCouldMove - it receive as req.query.start (the start position) and req.query.end (the end position that you want to move) and as req.params.piece the name of the piece in this case 'KNIGHT' and return the possible moves from a given position

```
The folder `src/pieces` is where it contains the piece moves logic

The file `src/pices/knight.js` explains

```
Knight File

in this case using knight piece has the 8 moves called UUR (UP -> UP -> RIGHT), UUL (UP -> UP -> LEFT), LLU (LEFT -> LEFT -> UP), RRD (RIGHT -> RIGHT -> DOWN) and the others follow this logic. 

Using the getKnightMovesLastCell with the moves {uur : true, rru : true} the return will be { uur : ['B3'], rru : ['C2'] } it's simulate the A1 moves

Using the getKnightMoves it will return the full move fur a given move object for example with the moves {uur : true, rru : true} the return will be { uur : ['A2', 'A3', 'B3'], rru : ['B1', 'C1', 'C2'] } it's simulate the A1 moves

The others method is the moves implementation.

```

The folder `src/routes` the API available routes

The folder `src/util` has the helpers files


## Routes Examples

```
http://localhost:6060/v1/get-moves-by-position/KNIGHT?position=A1&turns=2 // will return an array of array of the moves in the next 2 turns
http://localhost:6060/v1/get-moves-by-position/KNIGHT?position=B7&turns=1 // will return an array of array of the moves in the next 1 turns
http://localhost:6060/v1/get-moves-by-position/KNIGHT?position=H4&turns=3 // will return an array of array of the moves in the next 3 turns
http://localhost:6060/v1/get-moves-by-position/KNIGHT?position=A1 // will return an array of array of the moves in the next 1 turns

http://localhost:6060/v1/could-move/KNIGHT?start=A1&end=B2   // will return false
http://localhost:6060/v1/could-move/KNIGHT?start=A1&end=B3   // will return true
http://localhost:6060/v1/could-move/KNIGHT?start=A1&end=C2   // will return true 

```

## Contributing

Feel free to join us on the API or in [Frontend App built in React](https://github.com/marcusmota/chess-moves-solver-app)



## Authors

* **Marcus Mota** -  [MarcusMota](https://github.com/marcusmota)


