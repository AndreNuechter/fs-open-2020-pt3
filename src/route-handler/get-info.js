module.exports = db => (_, res) => res
    .send(`${db.persons.length} entr${
    db.persons.length === 1 ? 'y' : 'ies'
} @ ${new Date}`);