module.exports = db => (req, res) => {
    const { id } = req.params;
    const person = db.persons.find(p => p.id === +id);

    if (person) res.json(person);
    else res.sendStatus(404);
};