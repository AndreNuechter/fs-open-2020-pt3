module.exports = Entry => async (_, res) => {
    const results = await Entry.find({});
    res.send(`${results.length} entr${results.length === 1 ? 'y' : 'ies'} @ ${new Date}`);
};