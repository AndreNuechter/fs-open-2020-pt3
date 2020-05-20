const Entry = require('./model/Entry');
const getInfo = require('./route-handler/get-info');
const getPersons = require('./route-handler/get-persons');
const getPerson = require('./route-handler/get-person');
const deletePerson = require('./route-handler/delete-person');
const addPerson = require('./route-handler/add-person');
const updatePerson = require('./route-handler/update-person');

const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};
const Route = (method, route, cb) => ({
    method,
    route,
    cb: asyncHandler(cb)
});

module.exports = [
    Route('get', '/api/persons', getPersons(Entry)),
    Route('get', '/info', getInfo(Entry)),
    Route('get', '/api/persons/:id', getPerson(Entry)),
    Route('post', '/api/persons', addPerson(Entry)),
    Route('delete', '/api/persons/:id', deletePerson(Entry)),
    Route('put', '/api/persons/:id', updatePerson(Entry))
];