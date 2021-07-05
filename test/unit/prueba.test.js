const assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

"use strict"

/*const assert = require('assert');
const request = require('supertest')
const app = require('../app.js')

const request = request("http://localhost:8080")

describe('products', function() {
    describe('GET', function(){
        it('Should return json as default data format', function(done){
            request.get('/api/products')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});*/