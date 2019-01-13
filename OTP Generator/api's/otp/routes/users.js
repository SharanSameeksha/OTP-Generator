var express = require('express');
var router = express.Router();
import * as dbOperations from '../database/database';

/* GET users listing. */
router.get('/fetch', function(req, res, next) {
  dbOperations.fetchContacts().then((contacts) => {
    res.status(200).json({ response: contacts});
  }).catch((err) => {
    res.status(500).json({ error: err});
  })
});
router.all('/initiate', (req, res) => {
  dbOperations.initiateContactsLists().then((response) => {
    res.status(200).json({status: 'success'});
  }).catch((initiateErr) => {
    res.status(500).json({error: initiateErr});
  })
})
export { router };
