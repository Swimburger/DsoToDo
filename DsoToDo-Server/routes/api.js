var express = require('express');
var router = express.Router();

var taskLists = [
  {
    "id": 1,
    "title": "Groceries",
    "tasks": [
      { "title": "Eggs", "completed": false },
      { "title": "Bacon", "completed": false },
      { "title": "Moar Bacon", "completed": true },
      { "title": "All the bacon", "completed": true },
    ]
  },
  {
    "id": 2,
    "title": "DevSecOps Front-End",
    "tasks": [
      { "title": "Create Angular App", "completed": false },
      { "title": "Publish to GitHub", "completed": false }
    ]
  }
];

/* GET home page. */
router.route('/task-lists')
  .get(function (req, res) {
    res.json(taskLists);
  })
  .post(function (req, res) {
    var taskList = req.body;
    taskList.id = guid();
    taskLists.push(taskList);
    res.json(taskList);
  });

router.route('/task-lists/:taskListId')
  .get(function (req, res) {
    var taskListId = req.params.taskListId;
    var taskListIndex = taskLists.findIndex((taskList) => taskList.id == taskListId);
    if (taskListIndex == -1) {
      return;
    }

    res.json(taskLists[taskListIndex]);
  })
  .post(function (req, res) {
    var taskListId = req.params.taskListId;
    var taskListIndex = taskLists.findIndex((task) => task.id == taskListId);
    if (taskListIndex == -1) {
      res.send('404');
      return;
    }
    taskLists[taskListIndex] = req.body;
    res.json(taskLists[taskListIndex]);
  })
  .delete(function (req, res) {
    var taskListId = req.params.taskListId;
    var taskListIndex = taskLists.findIndex((task) => task.id == taskListId);
    if (taskListIndex == -1) {
      res.send('404');
      return;
    }

    taskLists.splice(taskListIndex, 1);
    res.json(taskLists);
  });

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

module.exports = router;
