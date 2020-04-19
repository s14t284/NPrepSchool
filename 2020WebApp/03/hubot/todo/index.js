"use strict";
const tasks = new Array();

/**
 *
 * @param {string} task
 */
function todo(task) {
  tasks.push({ name: task, state: false });
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
 *
 * @param {string} task
 */
function done(task) {
  const indexFound = tasks.findIndex((t) => t.name === task);
  if (indexFound != -1) {
    tasks[indexFound].state = true;
  }
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
  }
}

module.exports = { todo, list, done, donelist, del };
