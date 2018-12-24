
const faker = require('faker');
faker.locale = "pt_BR";

const helpers = require("../../src/util/helpers");
const mocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('Util Helpers Unit Test', () => {

    const chessHash = {
        columns : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        rows : 8
    };

    describe('test moves methods', () => {

        it('should moves UP 1 times', done => {

            const result = helpers.movesUp(1, 'B', 7, chessHash);

            expect(result).to.be.equal('B8');
            done();

        });

        it('should moves UP 3 times', done => {

            const result = helpers.movesUp(3, 'B', 1, chessHash);

            expect(result).to.be.equal('B4');
            done();

        });

        it('should moves DOWN 1 times', done => {

            const result = helpers.movesDown(1, 'B', 7, chessHash);

            expect(result).to.be.equal('B6');
            done();

        });

        it('should moves DOWN 3 times', done => {

            const result = helpers.movesDown(3, 'B', 5, chessHash);

            expect(result).to.be.equal('B2');
            done();

        });

        it('should moves RIGHT 1 times', done => {

            const result = helpers.movesRight(1, 'B', 7, chessHash);

            expect(result).to.be.equal('C7');
            done();

        });

        it('should moves RIGHT 3 times', done => {

            const result = helpers.movesRight(3, 'B', 5, chessHash);

            expect(result).to.be.equal('E5');
            done();

        });

        it('should moves LEFT 1 times', done => {

            const result = helpers.movesLeft(1, 'D', 5, chessHash);

            expect(result).to.be.equal('C5');
            done();

        });

        it('should moves LEFT 3 times', done => {

            const result = helpers.movesLeft(3, 'H', 5, chessHash);

            expect(result).to.be.equal('E5');
            done();

        });
    });

    describe('test helpers methods', () => {

        it('should the first character (A) of a position string `A1` ', done => {

            const result = helpers.getFirstPositionCharacter('A1')

            expect(result).to.be.equal('A');
            done();

        });

        it('should the second character (1) of a position string `A1` ', done => {

            const result = helpers.getSecondPositionCharacter('A1')

            expect(result).to.be.equal(1);
            done();

        });

    });

});