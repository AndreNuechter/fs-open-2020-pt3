const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGO_URL;
const schema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    number: {
        type: String,
        minlength: 8,
        required: true
    }
});

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('connected to MongoDB'))
    .catch(({ message }) => console.error('error connecting to MongoDB:', message));
mongoose.set('useCreateIndex', true);

schema.set('toJSON', {
    transform(_, returnedObject) {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
schema.plugin(uniqueValidator);

module.exports = mongoose.model('Entry', schema);