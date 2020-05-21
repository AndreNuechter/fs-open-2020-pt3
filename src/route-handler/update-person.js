const throwError = (msg, type) => {
    const error = new Error(msg);
    error.name = type;
    throw error;
};

module.exports = Entry => async (req, res) => {
    const { id } = req.params;
    const { name, number } = req.body;
    const person = await Entry.findById(id);

    if (!person) {
        throwError('The contact isn\'t in storage.', 'NotFoundError');
    }

    if (person.name === name) {
        throwError('Validation failed: The given name differs from that on the entry with the requested id', 'ValidationError');
    }

    await Entry.updateOne({ _id: id }, { number }, { runValidators: true });

    res.json({ id, name, number });
};