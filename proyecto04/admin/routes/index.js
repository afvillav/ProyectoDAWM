var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customers',async function(req, res, next) {
  const URL = 'http://localhost:4444/rest/customer/findAll/json'
  const config = {
    proxy: {
      host: 'localhost',
      port: 4444
    }
  }
  const response = await axios.get(URL, config);
    
  res.render('customers', { title: 'Customers', customers: response.data });
})

/*router.get('/sales',async function(req, res, next) {
  const URL = 'https://sales-data-609d5-default-rtdb.firebaseio.com/data.json'
  const config = {
    proxy: {
      host: 'localhost',
      port: 4444
    }
  }
  const response = await axios.get(URL, config);
    
  res.render('customers', { title: 'Customers', customers: response.data });
})*/

module.exports = router;
