
let faker = require('faker');
faker.locale = "pt_BR";
const expect = require('chai').expect;
const should = require('chai').should;

describe('Chess Integration Test', () => {

    describe('GET /v1/get-moves-by-position/knight', () => {
        it('should return 200 the 2 availables knight`s moves from A1', done => {

            let position = 'A1';

            request
            .get(`/v1/get-moves-by-position/knight?position=${position}`)
            .set('Accept', /application\/json/)
            .end((err, result) => {

                expect(result.body).to.have.lengthOf(2);
                expect(result.body).to.include.deep.members([['A2', 'A3', 'B3']])
                expect(result.body).to.include.deep.members([['B1', 'C1', 'C2']])
                done();

            });
        });

        it('should return 200 the 4 availables knight`s moves from C1', done => {

            let position = 'C1';

            request
            .get(`/v1/get-moves-by-position/knight?position=${position}`)
            .set('Accept', /application\/json/)
            .end((err, result) => {

                expect(result.body).to.have.lengthOf(4);
                expect(result.body).to.include.deep.members([['C2', 'C3', 'B3']])
                expect(result.body).to.include.deep.members([['C2', 'C3', 'D3']])
                expect(result.body).to.include.deep.members([['B1', 'A1', 'A2']])
                expect(result.body).to.include.deep.members([['D1', 'E1', 'E2']])
                done();

            });
        });

        it('should return 200 the 4 availables knight`s moves from G7', done => {

            let position = 'G7';

            request
            .get(`/v1/get-moves-by-position/knight?position=${position}`)
            .set('Accept', /application\/json/)
            .end((err, result) => {

                expect(result.body).to.have.lengthOf(4);
                expect(result.body).to.include.deep.members([['F7', 'E7', 'E8']])
                expect(result.body).to.include.deep.members([['F7', 'E7', 'E6']])
                expect(result.body).to.include.deep.members([['G6', 'G5', 'F5']])
                expect(result.body).to.include.deep.members([['G6', 'G5', 'H5']])
                done();

            });
        });

        it('should return 200 the 3 availables knight`s moves from B8', done => {

            let position = 'B8';

            request
            .get(`/v1/get-moves-by-position/knight?position=${position}`)
            .set('Accept', /application\/json/)
            .end((err, result) => {

                expect(result.body).to.have.lengthOf(3);
                expect(result.body).to.include.deep.members([['B7', 'B6', 'A6']])
                expect(result.body).to.include.deep.members([['B7', 'B6', 'C6']])
                expect(result.body).to.include.deep.members([['C8', 'D8', 'D7']])
                done();

            });
        });

        it('should return 200 the 2 availables knight`s moves from H8', done => {

            let position = 'H8';

            request
            .get(`/v1/get-moves-by-position/knight?position=${position}`)
            .set('Accept', /application\/json/)
            .end((err, result) => {

                expect(result.body).to.have.lengthOf(2);
                expect(result.body).to.include.deep.members([['G8', 'F8', 'F7']])
                expect(result.body).to.include.deep.members([['H7', 'H6', 'G6']])
                done();

            });
        });

        it('should return 200 the 8 availables knight`s moves from D4', done => {

            let position = 'D4';

            request
            .get(`/v1/get-moves-by-position/knight?position=${position}`)
            .set('Accept', /application\/json/)
            .end((err, result) => {

                expect(result.body).to.have.lengthOf(8);
                expect(result.body).to.include.deep.members([['D5', 'D6', 'E6']])
                expect(result.body).to.include.deep.members([['D5', 'D6', 'C6']])
                expect(result.body).to.include.deep.members([['D3', 'D2', 'C2']])
                expect(result.body).to.include.deep.members([['D3', 'D2', 'E2']])
                expect(result.body).to.include.deep.members([['E4', 'F4', 'F5']])
                expect(result.body).to.include.deep.members([['E4', 'F4', 'F3']])
                expect(result.body).to.include.deep.members([['C4', 'B4', 'B5']])
                expect(result.body).to.include.deep.members([['C4', 'B4', 'B3']]);
                done();

            });
        });

        it('should return 200 the 4 availables knight`s moves from B2', done => {

            let position = 'B2';

            request
            .get(`/v1/get-moves-by-position/knight?position=${position}`)
            .set('Accept', /application\/json/)
            .end((err, result) => {

                expect(result.body).to.have.lengthOf(4);
                expect(result.body).to.include.deep.members([['B3', 'B4', 'C4']])
                expect(result.body).to.include.deep.members([['B3', 'B4', 'A4']])
                expect(result.body).to.include.deep.members([['C2', 'D2', 'D3']])
                expect(result.body).to.include.deep.members([['C2', 'D2', 'D1']])
                done();

            });
        });

    });


});