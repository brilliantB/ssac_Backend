var express = require("express");
var router = express.Router();

const time = new Data(); //서버가 실행될 때

router.get("/", function (req, res, next) {
    console.log(time);

    const time2 = new Date(); //요청이 들어올 때

    console.log(time2);

    res.render("index", {title: "Express"});
});

module.exports = router;