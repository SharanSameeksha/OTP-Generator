import mongoose from 'mongoose';
import * as ContactModel from './contactsSchema';
import _ from 'lodash';
import * as MessageModel from './OtpSchema';

let mongoConnection;
const contacts = [{
    FirstName: 'Ashish',
    LastName: 'Gupta',
    Mobile: '+919582556333',
    lastOtp: null
    },
    {
        FirstName: 'Romanshu',
        LastName: 'Jain',
        Mobile: '+919582446333',
        lastOtp: null
    },
    {
        FirstName: 'Kapil',
        LastName: 'Balwani',
        Mobile: '+919582666333',
        lastOtp: null
    }];
function connect() {
	return new Promise((resolve, reject) => {
		if (!mongoConnection) {
			mongoConnection = mongoose.connect('mongodb://127.0.0.1:27017/test', function(err){
		if(err) {
				reject(err);
		} else {
		console.log('Database successfully connected');
			resolve()
		}
		});
		} else {
			resolve();
		}
	});
}

export function fetchContacts() {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const contactsModelObject = ContactModel.ContactModel;
            contactsModelObject.find({}, (err, response) => {
                if (err) {
                    console.log('Error occured while fetching data : ${err}');
                } else {
                    resolve(response);
                }
            })
        }).catch((err) => {
            reject(err);
        })
    })
}

export function initiateContactsLists() {
    return new Promise(async (resolve, reject) => {
        connect().then(() => {
            const errorsList = []
            _.forEach(contacts, (contact) => {
            const contactsModelObject = new ContactModel.ContactModel(contact);
            contactsModelObject.save((err, response) => {
                if (err) {
                    console.log('Error occured while saving data : ${err}');
                    errorsList.push(err);
                }
            });
        })
        if (errorsList.length > 0) {
            reject(err);
        } else {
            resolve();
        }
        }).catch((err) => {
            reject(err);
    });
    })
}

export function saveOtp(otpObject) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const OtpSchema = new MessageModel.MessagesModel(otpObject);
            OtpSchema.save((err, otpSaveResponse) => {
                if(err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(otpSaveResponse);
                }
            })
        }).catch((err) => {
            reject(err);
        });
    })
}

export function updateUserLastOtp({ userId, otp}) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const contactObject = ContactModel.ContactModel;
            contactObject.findOne({_id: userId }, (findErr, findRes) => {
                if (findErr) {
                    console.log(findErr);
                    reject(findErr);
                } else {
                    if (findRes) {
                    findRes.lastOtp = otp;
                    findRes.save((updateErr, updateRes) => {
                        if (updateErr) {
                            console.log(updateErr);
                            reject(updateErr);
                        } else {
                            console.log(updateRes);
                            resolve('update success');
                        }
                    })
                    resolve(findRes);
                    } else {
                        reject('Contact not found to last Otp');
                    }
                }
            })
        }).catch((conErr) => {
            reject(conErr);
        })
    })
}

export function fetchMessages() {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const messagesModelObject = MessageModel.MessagesModel;
            messagesModelObject.find({}).populate('contact').sort({ createdAt: -1 }).exec((fetchErr, fetchRes) => {
                if (fetchErr) {
                    reject(fetchErr);
                } else {
                    resolve(fetchRes);
                }
            })
        }).catch()
    })
}