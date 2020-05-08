var mongoose = require("mongoose"),
  passport = require("passport"),
  config = require("../config/database");

require("../config/passport")(passport);

var express = require("express"),
  jwt = require('jsonwebtoken'),
  router = express.Router(),
  User = require("../models/user");

router.post("/signup", function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: "Please pass username and password" });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
    });

    newUser.save(function (err) {
      if (err) {
        res.json({ success: false, msg: "Username already exists" });
      }
      res.json({ success: true, msg: "Success!" });
    });
  }
});

router.post("/signin", function (req, res) {
    User.findOne({
        username: req.body.username,
    }, function(err, user) {
        if(err) throw err;
        
        if(!user) {
            res.status(401).send({success: false, msg: 'No user found...'});
        } else {
            user.comparePassword(req.body.password, function(err, isMatch) {
                if(isMatch && !err) {
                    var token = jwt.sign(user.toJSON(), config.secret);
                    res.json({success: true, token: 'JWT ' + token});
                } else {
                   res.status(401).send({success: false, msg: 'Wrong Password'});
                }
            })
        }
    })
})

module.exports = router;