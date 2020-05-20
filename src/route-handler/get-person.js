module.exports = Entry => async (req, res) => {
    const { id } = req.params;
    const person = await Entry.findById(id);

    if (person) res.json(person);
    else res.sendStatus(404);
};