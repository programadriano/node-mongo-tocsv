
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node, Mongo e Redis",
        version: "0.0.2"
    });
});

module.exports = router;
