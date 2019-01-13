var express = require('express');
var router = express.Router();
import * as smsApi from '../sms-Twilio/sms';
import * as dbObject from '../database/database';

/* GET home page. */
router.post('/sms', function(req, res) {
  const message = `Hi. Your OTP is: ${req.body.otp}`;
  // call api to send message
  smsApi.sendSms(req.body.receiver.Mobile, message).then((resp) => {
    const messageDbObject = {
      Otp: req.body.otp,
      contact: req.body.receiver.id
    }
    dbObject.saveOtp(messageDbObject).then((response) => {
      dbObject.updateUserLastOtp({ userId: req.body.receiver.id, otp: req.body.otp }).then(() => {
        res.status(200).json({status: 'sucess', response});
      }).catch((saveErr) => {
        res.status(500).json({ status: 'failed', err: saveErr});
      })
    }).catch((err) => {
      res.status(500).json({ status: 'failed', err});
    })
  }).catch((err) => {
    res.status(500).json({status: 'failed', err});
  });
});

router.get('/messages', (req, res) => {
  dbObject.fetchMessages().then((messages) => {
    res.status(200).json({response: messages});
  }).catch((err) => {
    res.status(500).json({error: err});
  })
})

export { router };
