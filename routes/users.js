var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// GET method route
router.get('/cool/', function (req, res) {
  res.send('Eres genial, Aquí queda creada la ruta /users/cool/');

});
module.exports = router;
