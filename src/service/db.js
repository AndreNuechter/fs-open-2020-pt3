const fs = require('fs');
const path = require('path');
const persons = require('./persons.json');

module.exports = new Proxy({ persons }, {
    set(obj, key, val) {
        if (key === 'persons') {
            fs.writeFile(
                path.resolve(__dirname, 'persons.json'),
                JSON.stringify(val),
                (e) => { if (e) console.error(e); }
            );
            return Reflect.set(...arguments);
        }
    }
});