module.exports = Entry => async (req, res) => {
    const { id } = req.params;
    await Entry.findByIdAndDelete(id);
    res.json(await Entry.find({}));
};