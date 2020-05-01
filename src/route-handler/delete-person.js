module.exports = db => (req, res) => {
    const { id } = req.params;

    db.persons = db.persons.filter(p => p.id !== +id);
    res.json(db.persons);
};