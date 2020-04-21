"use strict";
let tasks = new Array();
const fs = require("fs");
const fileName = "./tasks.json";

try {
  const data = fs.readFileSync(fileName, "utf8");
  tasks = JSON.parse(data);
} catch (ignore) {
  console.log(fileName + "から復元できませんでした");
}

function saveTasks() {
  fs.writeFileSync(fileName, JSON.stringify(tasks), "utf8");
}

/**
 *
 * @param {string} task
 */
function todo(task) {
  tasks.push({ name: task, state: false });
  saveTasks();
}

/**
 *
 * @param {string} task
 */
function done(task) {
  const indexFound = tasks.findIndex((t) => t.name === task);
  if (indexFound != -1) {
    tasks[indexFound].state = true;
    saveTasks();
  }
}

/**
 *
 * @param {object} taskAndIsDonePair
 * @returns {boolean}
 */
function isDone(taskAndIsDonePair) {
  return taskAndIsDonePair.state;
}

/**
 *
 * @param {object} taskAndIsDonePair
 * @returns {boolean}
 */
function isNotDone(taskAndIsDonePair) {
  return !isDone(taskAndIsDonePair);
}

/**
 * @returns {array}
 */
function list() {
  return tasks.filter(isNotDone).map((t) => t.name);
}

/**
 * @returns {array}
 */
function donelist() {
  return tasks.filter(isDone).map((t) => t.name);
}

function del(task) {
  const indexFound = tasks.findIndex((t) => t.name === task);
  if (indexFound != -1) {
    tasks.splice(indexFound, 1);
    saveTasks();
  }
}

module.exports = { todo, list, done, donelist, del };
