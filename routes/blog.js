var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/blog:page', (req, res) => {
  const page = req.params.page;
  res.render(`blog${page}`);
});
module.exports = router;