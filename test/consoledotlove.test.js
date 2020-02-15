const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');

const api = supertest('http://localhost:4000');

describe('GET /profiles', () => {
    it('should return a 200 response', done => {
        api.get('/profiles')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
    it('should return an array of objects with all the correct fields', done => {
        api.get('/profiles')
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

describe('GET /profiles/:id', () => {
    let profileIdToGet;
    before(done => {
        api.get('/profiles')
            .set('Accept', 'application/json')
            .end((error, response) => {
                const profiles = response.body;
                profileIdToGet = profiles[profiles.length - 1]._id;
                done();
            });
    });
    it('should return a profile object with the correct fields', done => {
        api.get(`/profiles/${profileIdToGet}`)
            .set('Accept', 'application/json')
            .end((error, response) => {
                // check for fields
                expect(response.body).to.be.an('object');
                expect(response.body).to.include.all.keys(
                    'image',
                    'name',
                    'location',
                    'about',
                    'languages'
                );
                done();
            });
    });
});

describe('POST /profiles', () => {
    const newProfile = {
        image: 'https://i.imgur.com/p0KVwki.jpg',
        name: 'Jenny Block',
        age: 34,
        location: 'Atlanta, GA',
        about:
            'Kick ass singer, dancer, actress and all around badass who codes in her free time',
        languages: 'ruby, Javascript, python'
    };

    before(done => {
        api.post('/profiles')
            .set('Accept', 'application/json')
            .send(newProfile)
            .end(done);
    });
    it('should add new profile to collection and return it', done => {
        api.get('/profiles')
            .set('Accept', 'application/json')
            .end((error, response) => {
                const profileToFind = response.body.find(
                    profile => profile.id === newProfile.id
                );
                expect(profileToFind).to.be.an('object');
                done();
            });
    });
});
