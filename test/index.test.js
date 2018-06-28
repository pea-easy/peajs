/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';
var request  = require('supertest');

describe('index', function () {
    beforeEach(function () {

    });

    afterEach(function () {

    });
    it('should have model for "Hello World"', function () {
        request('http://127.0.0.1:8899')
            .get('/')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                res.body.should.equal('Hello World');
            });
    });

});
