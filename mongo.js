const mongoose = require('mongoose');

const pw = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url =
    `mongodb+srv://fullstack-2020:${pw}@cluster0-fgeca.mongodb.net/phonebook-app?retryWrites=true&w=majority`;
const Entry = mongoose.model(
    'Entry',
    new mongoose.Schema({
        name: String,
        number: String,
    })
);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

if (name && number) new Entry({
        name,
        number,
    })
    .save()
    .then(() => {
        console.log(`Added ${name} number ${number} to the phonebook`);
        mongoose.connection.close();
    });
else Entry
    .find({})
    .then(result => {
        result.forEach(entry => {
            console.log(entry);
        })
        mongoose.connection.close();
    });