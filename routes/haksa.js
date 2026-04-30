var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/haksa/professors', function(req, res, next) {
  res.render('index', { title: '고수관리', pageName: 'haksa/professors.ejs'});
});

router.get('/haksa/students', function(req, res, next) {
  res.render('index', { title: '학생관리', pageName: 'haksa/students.ejs'});
});

router.get('/haksa/courses', function(req, res, next) {
  res.render('index', { title: '강좌관리', pageName: 'haksa/courses.ejs'});
});

module.exports = router;
