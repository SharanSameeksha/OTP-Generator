import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Mobile: String,
    lastOtp: Number
},
{
    versionKey: false
});

const ContactModel = new mongoose.model('Contact', contactSchema);
export { ContactModel}