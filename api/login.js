var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

// Create
router.get('/:id',
  function(req, res, next){
        res.json({success:true, data:"data te2st1"}); }
);

module.exports = router;