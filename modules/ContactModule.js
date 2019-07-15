const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    phone: String,
    company: String,
    active: Boolean
})

const Contact = mongoose.model('kontak', ContactSchema);

module.exports = Contact;