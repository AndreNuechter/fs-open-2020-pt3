module.exports = Entry => async (req, res) => {
    const { name, number } = req.body;
    const newEntry = await new Entry({ name, number }).save();
    res.json(newEntry);
};