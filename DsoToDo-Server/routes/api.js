var express = require('express');
var router = express.Router();

var tasks = [
  {
    "id": 1,
    "title": "Groceries",
    "tasks": [
      "Eggs",
      "Bacon",
      "Moar Bacon"
    ]
  },
  {
    "id": 2,
    "title": "DevSecOps Front-End",
    "tasks": [
      "Create Angular App",
      "Publish to GitHub"
    ]
  }
];

/* GET home page. */
router.route('/tasks')
  .get(function (req, res) {
    res.json(tasks);
  })
  .post(function (req, res) {
    var task = req.body;
    tasks.push(task);
    res.json(task);
  });

router.route('/tasks/:taskId')
  .get(function (req, res) {
    var taskId = parseInt(req.params.taskId);
    var taskIndex = tasks.findIndex((task) => task.id === taskId);
    res.json(tasks[taskIndex]);
  })
  .post(function (req, res) {
    var taskId = parseInt(req.params.taskId);
    var taskIndex = tasks.findIndex((task) => task.id === taskId);
    tasks[taskIndex] = req.body;
    res.json(tasks[taskIndex]);
  });

module.exports = router;
