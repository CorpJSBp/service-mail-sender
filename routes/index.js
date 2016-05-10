'use strict'
import express from 'express'
const router = express.Router() // eslint-disable-line new-cap

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Searvice A' })
});

module.exports = router
