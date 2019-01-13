import {Twilio} from 'twilio';

const AccountSID = 'ACe38011b80dc16bd642e2cdcadd753344';
const token = '32e8b92349cd52b6f8ceb9acd3e5aefc';
const client = require('twilio')(AccountSID, token);

export function sendSms(receiver, message) {
    return new Promise((resolve, reject) => {
        client.messages.create({
            body: message,
            from: '+15005550006',
            to: receiver
          }, (err, respon) => {
              console.log(err);
              if (err) {
                  console.log('Err occured while sending otp to mobile number')
                  reject(err);
              } else {
                  resolve(respon);
              }
          })
    })
}