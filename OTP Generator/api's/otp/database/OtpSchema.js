import mongoose from 'mongoose';

const MessagesSchema = new mongoose.Schema({
    Otp: Number,
    contact: { type: mongoose.Schema.ObjectId, ref: 'Contact' }
},
{
    timestamps: true,
    versionKey: false
});

const MessagesModel = new mongoose.model('Message', MessagesSchema);
export { MessagesModel}