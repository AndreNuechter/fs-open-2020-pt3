module.exports = Entry => (_, res) => Entry
    .find({})
    .then(results => res.json(results));