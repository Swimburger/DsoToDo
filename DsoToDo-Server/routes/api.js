var express = require('express');
var router = express.Router();

var taskLists = [
  {
    "id": 1,
    "title": "Groceries",
    "tasks": [
      "Moar Bacon",
      "All the bacon"
    ],
    "finishedTasks": [
      "Eggs",
      "Bacon"
    ]
  },
  {
    "id": 2,
    "title": "DevSecOps Front-End",
    "tasks": [
      "Create Angular App",
      "Publish to GitHub"
    ],
    "finishedTasks": [
    ]
  }
];

/* GET home page. */
router.route('/task-lists')
  .get(function (req, res) {
    res.json(taskLists);
  })
  .post(function (req, res) {
    var task = req.body;
    taskLists.push(task);
    res.json(task);
  });

router.route('/task-lists/:taskListId')
  .get(function (req, res) {
    var taskListId = parseInt(req.params.taskListId);
    var taskListIndex = taskLists.findIndex((taskList) => taskList.id === taskListId);
    if(taskListIndex == -1){
      return;
    }

    res.json(taskLists[taskListIndex]);
  })
  .post(function (req, res) {
    var taskListId = parseInt(req.params.taskListId);
    var taskListIndex = taskLists.findIndex((task) => task.id === taskListId);
    if(taskListIndex == -1){
      res.send('404');
      return;
    }
    taskLists[taskListIndex] = req.body;
    res.json(taskLists[taskListIndex]);
  })
  .delete(function (req, res) {
    var taskListId = parseInt(req.params.taskListId);
    var taskListIndex = taskLists.findIndex((task) => task.id === taskListId);
    if(taskListIndex == -1){
      res.send('404');
      return;
    }

    taskLists.splice(taskListIndex, 1);
    res.json(taskLists);
  });

module.exports = router;
