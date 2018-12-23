
const faker = require('faker');
faker.locale = "pt_BR";

const chessController = require("../../src/controllers/chess");
const mocks = require('node-mocks-http');
const should = require('chai').should();
const expect = require('chai').expect;
const req = mocks.createRequest();
const res = mocks.createResponse();

describe('Chess Controller Unit Test', () => {

    const pos = 'A1';

    const chessHash = {
        columns : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        rows : 8
    };


});