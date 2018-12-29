
const faker = require('faker');
faker.lLocale = "pt_BR";

const knight = require("../../src/pieces/knight");
const mocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('Knight Available Moves Unit Test', () => {

    const chessHash = {
        columns : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        rows : 8
    };

    describe('test KNIGHT moves methods', () => {

        it('should moves from A1 to B3 (UP -> UP -> RIGHT)', done => {

            const result = knight.UUR('A1', chessHash);

            expect(result).to.be.equal('B3');
            done();

        });

        it('should moves from B1 to C3 (UP -> UP -> RIGHT)', done => {

            const result = knight.UUR('B1', chessHash);

            expect(result).to.be.equal('C3');
            done();

        });

        it('should moves from B1 to A3 (UP -> UP -> LEFT)', done => {

            const result = knight.UUL('B1', chessHash);

            expect(result).to.be.equal('A3');
            done();

        });

        it('should moves from G1 to F3 (UP -> UP -> LEFT)', done => {

            const result = knight.UUL('G1', chessHash);

            expect(result).to.be.equal('F3');
            done();

        });

        it('should moves from B3 to A1 (DOWN -> DOWN -> LEFT)', done => {

            const result = knight.DDL('B3', chessHash);

            expect(result).to.be.equal('A1');
            done();

        });

        it('should moves from G3 to F1 (DOWN -> DOWN -> LEFT)', done => {

            const result = knight.DDL('G3', chessHash);

            expect(result).to.be.equal('F1');
            done();

        });

        it('should moves from B3 to C1 (DOWN -> DOWN -> RIGHT)', done => {

            const result = knight.DDR('B3', chessHash);

            expect(result).to.be.equal('C1');
            done();

        });

        it('should moves from G3 to H1 (DOWN -> DOWN -> RIGHT)', done => {

            const result = knight.DDR('G3', chessHash);

            expect(result).to.be.equal('H1');
            done();

        });

        it('should moves from B3 to D4 (RIGHT -> RIGHT -> UP)', done => {

            const result = knight.RRU('B3', chessHash);

            expect(result).to.be.equal('D4');
            done();

        });

        it('should moves from F3 to H4 (RIGHT -> RIGHT -> UP)', done => {

            const result = knight.RRU('F3', chessHash);

            expect(result).to.be.equal('H4');
            done();

        });

        it('should moves from B3 to D2 (RIGHT -> RIGHT -> DOWN)', done => {

            const result = knight.RRD('B3', chessHash);

            expect(result).to.be.equal('D2');
            done();

        });

        it('should moves from F3 to H2 (RIGHT -> RIGHT -> DOWN)', done => {

            const result = knight.RRD('F3', chessHash);

            expect(result).to.be.equal('H2');
            done();

        });

        it('should moves from C3 to A2 (LEFT -> LEFT -> DOWN)', done => {

            const result = knight.LLD('C3', chessHash);

            expect(result).to.be.equal('A2');
            done();

        });

        it('should moves from F3 to D2 (LEFT -> LEFT -> DOWN)', done => {

            const result = knight.LLD('F3', chessHash);

            expect(result).to.be.equal('D2');
            done();

        });

        it('should moves from C3 to A4 (LEFT -> LEFT -> UP)', done => {

            const result = knight.LLU('C3', chessHash);

            expect(result).to.be.equal('A4');
            done();

        });

        it('should moves from F3 to D4 (LEFT -> LEFT -> UP)', done => {

            const result = knight.LLU('F3', chessHash);

            expect(result).to.be.equal('D4');
            done();

        });


    });

    describe('test FULL KNIGHT moves methods', () => {

        it('should moves from A1 to B3 (UP -> UP -> RIGHT)', done => {

            const result = knight.UURFull('A1', chessHash);

            expect(result).to.deep.equal(['A2','A3','B3']);
            done();

        });

        it('should moves from B1 to C3 (UP -> UP -> RIGHT)', done => {

            const result = knight.UURFull('B1', chessHash);

            expect(result).to.deep.equal(['B2','B3','C3']);
            done();

        });

        it('should moves from B1 to A3 (UP -> UP -> LEFT)', done => {

            const result = knight.UULFull('B1', chessHash);

            expect(result).to.deep.equal(['B2','B3','A3']);
            done();

        });

        it('should moves from G1 to F3 (UP -> UP -> LEFT)', done => {

            const result = knight.UULFull('G1', chessHash);

            expect(result).to.deep.equal(['G2','G3','F3']);
            done();

        });

        it('should moves from B3 to A1 (DOWN -> DOWN -> LEFT)', done => {

            const result = knight.DDLFull('B3', chessHash);

            expect(result).to.deep.equal(['B2','B1','A1']);
            done();

        });

        it('should moves from G3 to F1 (DOWN -> DOWN -> LEFT)', done => {

            const result = knight.DDLFull('G3', chessHash);

            expect(result).to.deep.equal(['G2','G1','F1']);
            done();

        });

        it('should moves from B3 to C1 (DOWN -> DOWN -> RIGHT)', done => {

            const result = knight.DDRFull('B3', chessHash);

            expect(result).to.deep.equal(['B2','B1','C1']);
            done();

        });

        it('should moves from G3 to H1 (DOWN -> DOWN -> RIGHT)', done => {

            const result = knight.DDRFull('G3', chessHash);

            expect(result).to.deep.equal(['G2','G1','H1']);
            done();

        });

        it('should moves from B3 to D4 (RIGHT -> RIGHT -> UP)', done => {

            const result = knight.RRUFull('B3', chessHash);

            expect(result).to.deep.equal(['C3','D3','D4']);
            done();

        });

        it('should moves from F3 to H4 (RIGHT -> RIGHT -> UP)', done => {

            const result = knight.RRUFull('F3', chessHash);

            expect(result).to.deep.equal(['G3','H3','H4']);
            done();

        });

        it('should moves from B3 to D2 (RIGHT -> RIGHT -> DOWN)', done => {

            const result = knight.RRDFull('B3', chessHash);

            expect(result).to.deep.equal(['C3','D3','D2']);
            done();

        });

        it('should moves from F3 to H2 (RIGHT -> RIGHT -> DOWN)', done => {

            const result = knight.RRDFull('F3', chessHash);

            expect(result).to.deep.equal(['G3','H3','H2']);
            done();

        });

        it('should moves from C3 to A2 (LEFT -> LEFT -> DOWN)', done => {

            const result = knight.LLDFull('C3', chessHash);

            expect(result).to.deep.equal(['B3','A3','A2']);
            done();

        });

        it('should moves from F3 to D2 (LEFT -> LEFT -> DOWN)', done => {

            const result = knight.LLDFull('F3', chessHash);

            expect(result).to.deep.equal(['E3','D3','D2']);
            done();

        });

        it('should moves from C3 to A4 (LEFT -> LEFT -> UP)', done => {

            const result = knight.LLUFull('C3', chessHash);

            expect(result).to.deep.equal(['B3','A3','A4']);
            done();

        });

        it('should moves from F3 to D4 (LEFT -> LEFT -> UP)', done => {

            const result = knight.LLUFull('F3', chessHash);

            expect(result).to.deep.equal(['E3','D3','D4']);
            done();

        });

        it('should return the last available moves from D7 position', done => {
            
            const moves = { ddr: true, ddl: true, rru: true, rrd: true, llu: true, lld: true };
            const position = 'D7';
            const chessHash = {
                columns : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                rows : 8
            };
            const result = knight.getKnightMovesLastCell(moves, position, chessHash);

            const resultMock = { ddr: 'E5', ddl: 'C5', llu: 'B8', lld: 'B6', rru: 'F8', rrd: 'F6' };

            expect(result).to.deep.equal(resultMock);
            done();

        });

        it('should return the full path moves from C1 position', done => {
            
            const moves = { uur: true, uul: true, rru: true, llu: true };
            const position = 'C1';
            const chessHash = {
                columns : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                rows : 8
            };
            const result = knight.getKnightMoves(moves, position, chessHash);

            const resultMock = { uur: [ 'C2', 'C3', 'D3' ],
            uul: [ 'C2', 'C3', 'B3' ],
            llu: [ 'B1', 'A1', 'A2' ],
            rru: [ 'D1', 'E1', 'E2' ] };

            expect(result).to.deep.equal(resultMock);
            done();

        });

    });


});