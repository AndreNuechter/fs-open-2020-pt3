const db = require('./service/db');
const Route = require('./util/Route');
const getInfo = require('./route-handler/get-info');
const getPersons = require('./route-handler/get-persons');
const getPerson = require('./route-handler/get-person');
const deletePerson = require('./route-handler/delete-person');
const addPerson = require('./route-handler/add-person');

module.exports = [
    Route('get', '/info', getInfo(db)),
    Route('get', '/api/persons', getPersons(db)),
    Route('get', '/api/persons/:id', getPerson(db)),
    Route('delete', '/api/persons/:id', deletePerson(db)),
    Route('post', '/api/persons', addPerson(db))
];