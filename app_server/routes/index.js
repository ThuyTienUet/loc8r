var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);

/* Other pages*/
router.get('/about', ctrlOthers.about);

module.exports = router;
