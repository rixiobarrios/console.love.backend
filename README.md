<img width="746" src="https://user-images.githubusercontent.com/55994508/74997584-07820380-541c-11ea-9355-b1c8bad08032.png" />

# A Dating and Friendship App for Programmers

## API Overview

Our JSON data was generated using [Mockaroo](https://mockaroo.com/) and stored in a [MongoDB](https://www.mongodb.com/) database. The team used Mongoose to define the shape of our data model (a dating profile) in the form of a Schema. We then used Express with Lodash and Method-override to build and handle our HTTP requests. Testing was done using Chai, Mocha and Supertest.

### Technologies used

**Database**

-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [Node.js](https://nodejs.org/en/)
-   [Nodemon](https://nodemon.io/)

**Functionality**

-   [Express](https://expressjs.com/)
-   [JSX](https://reactjs.org/docs/introducing-jsx.html)
-   [Method-override](https://www.npmjs.com/package/method-override)
-   [Lodash](https://lodash.com/)

**Connection between back and front ends**

-   [Cross-Origin Resourse Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

**Testing**

-   [Chai](https://www.chaijs.com/)
-   [Mocha](https://mochajs.org/)
-   [Supertest](https://www.npmjs.com/package/supertest)

## Profile Data Example

### Profile JSON Data

![Profile JSON Data](https://user-images.githubusercontent.com/57021062/75055147-14453c80-549a-11ea-994b-142388b952fd.png)

## Code Samples

### POST and PUT Requests

![HTTP Request](https://user-images.githubusercontent.com/57021062/75055696-22e02380-549b-11ea-89ec-1357d8d6d540.png)

### PUT Test

![PUT Method Test](https://user-images.githubusercontent.com/57021062/75055717-2b385e80-549b-11ea-9056-47ee5c5c328a.png)

## Challenges, Bugs and Fixes

-   Trouble connecting front and back ends - moved CORS up above Express in the index.js to fix

## Future Additions

-   Major refactor to add user authentication

## Contribution Guidelines

-   Fork and clone this repo
-   Open your terminal and go to the directory you want to store this application and ‘git clone’ it
-   Run ‘npm i’ in order to install all dependencies
-   Run ‘node db/seed.js’ and then ’nodemon’ to seed and see the database, and type in ‘localhost//:4000/profiles’ to see the json data
-   Create changes to the code and if you wish to add a new feature to the currently existing application [submit an issue to the back-end repo](https://github.com/muezzinsarwar/console.love-backend/issues) detailing your changes

## Sources

Database Media:

-   [Stocksnap](https://stocksnap.io/)
-   [Pixlr](https://pixlr.com/)
-   [Kapwing](https://www.kapwing/)
-   [LogoHub](https://logohub.io/)
-   [Pexels](https://www.pexels.com/)
-   [Pixabay](https://pixabay.com/)
-   [Burst](https://burst.shopify.com/)
-   [Twitter Bio Generator](http://www.twitterbiogenerator.com/)
-   [Imgur](https://imgur.com/)

Planning:

-   [Miro](https://miro.com/) to create our API dataflow diagram
-   [Trello](http://www.trello.com) for planning and task management

## Acknowledgements

Special thanks to:

-   Rixio's mentor Chris Mendoza for helping us fix our POST method
-   Esin Saribudak for helping us troubleshoot Heroku deployment
