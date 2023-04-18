//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["buy foods", "cook foods", "eat foods"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("en-us", options);

    res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function(req, res) {
    var item = req.body.newitem;
    items.push(item);
    res.redirect("/");
});

app.listen(8080, function(req, res) {
    console.log("server is running on port  8080");
});

// var currentDay = today.getDay();
// var day = "";

// if (currentDay === 6 || currentDay === 0) {
//     day = "weekend";
// } else {
//     day = "weekday ";
// }
// res.render("list", { listTitle : day });
// switch (currentDay) {
//     case 0:
//         day = "sunday";
//         break;
//     case 1:
//         day = "monday";
//         break;
//     case 2:
//         day = "tuesday";
//         break;
//     case 3:
//         day = "wednsday";
//         break;
//     case 4:
//         day = "thursday";
//         break;
//     case 5:
//         day = "friday";
//         break;
//     case 6:
//         day = "saturday";
//         break;
//     default:
//         break;
// }
// res.render("list", {
//     listTitle : day,
// });