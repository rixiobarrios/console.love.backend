const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');

const api = supertest('http://localhost:4000');

describe('GET /profiles', () => {
  it('should return a 200 response', done => {
    api
      .get('/profiles')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
  it('should return an array of objects with all the correct fields', done => {
    api
      .get('/profiles')
      .set('Accept', 'application/json')
      .end((error, response) => {
        response.body.forEach(profile => {
          expect(profile).includes.all.keys(
            'image',
            'name',
            'location',
            'about',
            'languages'
          );
        });
        done();
      });
  });
});
