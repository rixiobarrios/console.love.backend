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
            'bio',
            'languages',
            'github'
          );
        });
        done();
      });
  });
});

describe('GET /profiles/:id', () => {
  let profileIdToGet;
  before(done => {
    api
      .get('/profiles')
      .set('Accept', 'application/json')
      .end((error, response) => {
        const profiles = response.body;
        profileIdToGet = profiles[profiles.length - 1]._id;
        done();
      });
  });
  it('should return a profile object with the correct fields', done => {
    api
      .get(`/profiles/${profileIdToGet}`)
      .set('Accept', 'application/json')
      .end((error, response) => {
        // check for fields
        expect(response.body).to.be.an('object');
        expect(response.body).to.include.all.keys(
          'image',
          'name',
          'location',
          'bio',
          'languages',
          'github'
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
    bio:
      'Kick ass singer, dancer, actress and all around badass who codes in her free time',
    languages: 'ruby, Javascript, python',
    github: 'https://github.com/muezzinsarwar/console.love-frontend'
  };

  before(done => {
    api
      .post('/profiles')
      .set('Accept', 'application/json')
      .send(newProfile)
      .end(done);
  });
  it('should add new profile to collection and return it', done => {
    api
      .get('/profiles')
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

describe('PUT /profiles/:id', () => {
  let profileToUpdate;
  before(done => {
    api
      .get('/profiles')
      .set('Accept', 'application/json')
      .end((error, response) => {
        profileToUpdate = response.body[0];
        done();
      });
  });

  before(done => {
    api
      .put(`/profiles/${profileToUpdate._id}/edit`)
      .set('Accept', 'application/json')
      .send({
        _id: profileToUpdate._id,
        name: 'Jenny Block',
        age: 37
      })
      .end((error, response) => {
        done();
      });
  });

  it('should update a profile by id', done => {
    api
      .get(`/profiles/${profileToUpdate._id}`)
      .set('Accept', 'application/json')
      .end((error, response) => {
        expect(response.body.age).to.equal(37);
        done();
      });
  });
});

describe('DELETE /profiles/:id', () => {
  let profileToDelete;
  before(done => {
    api
      .get('/profiles')
      .set('Accept', 'application/json')
      .end((error, response) => {
        const profiles = response.body;
        profileToDelete = profiles[profiles.length - 1]._id;
        done();
      });
  });

  before(done => {
    api
      .delete(`/profiles/${profileToDelete}`)
      .set('Accept', 'application/json')
      .end((error, response) => {
        done();
      });
  });

  it('should delete the expected profile by id', done => {
    api
      .get('/profiles')
      .set('Accept', 'application/json')
      .end((error, response) => {
        const deletedProfile = response.body.find(
          profile => profile._id === `${profileToDelete}`
        );
        expect(deletedProfile).to.equal(undefined);
        done();
      });
  });
});
