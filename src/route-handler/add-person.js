const generateId = require('../util/generate-id');

module.exports = db => (req, res) => {
    const { name, number } = req.body;

    if (!(name && number)) {
        res.status(422)
            .json({ error: 'We need name and number' });
    } else if (db.persons.find(p => p.name === name)) {
        res.status(422)
            .json({ error: 'The name is already in storage' });
    } else {
        const person = { id: generateId(), name, number };
        db.persons = [...db.persons, person];
        res.json(person);
    }
};