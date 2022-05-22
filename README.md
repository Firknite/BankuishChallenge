Hello everyone, this proyect was made with nodejs v16.15

Follow the next steps to run this artifact:

npm install

npm run start

npm run start:dev (to run project with nodemon)

To run the test:

npm run test

The security of the endpoints was made with JWT.
Here is an example token to run some request to this API.

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhvbGEiLCJpYXQiOjE2NTMxNTM1NjAsImV4cCI6MTY1NDE1MzU1OX0.CARg63zz_X3oXKqNbK4KvNkSgGBtKraOAF8gJQN4tKM

set your .env at root directory

TOKEN_SECRET=1b498848649dfa5cdbe72b4ecd8b9bccd212110c6cf3d7ed37ccc4ee0d94223749ee4bd05baead8528e84433c41f242bef804c7d2c13ffce9916a6d70c260441
TOKEN_EXPIRES=7d

Follow the postman collection in the /Docs for more information about the endpoints.