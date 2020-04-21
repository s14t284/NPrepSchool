"use strict";
const fs = require("fs");
fs.unlink("./tasks.json", (err) => {
  const todo = require("./index.js");
  const seventeen = require("./seventeen.js");
  const assert = require("assert");

  todo.todo("ノートを買う");
  todo.todo("鉛筆を買う");
  assert.deepEqual(todo.list(), ["ノートを買う", "鉛筆を買う"]);

  todo.done("鉛筆を買う");
  assert.deepEqual(todo.list(), ["ノートを買う"]);
  assert.deepEqual(todo.donelist(), ["鉛筆を買う"]);

  todo.del("ノートを買う");
  todo.del("鉛筆を買う");
  assert.deepEqual(todo.list(), []);
  assert.deepEqual(todo.donelist(), []);

  assert(seventeen.isMultipleSeventeen(17));
  assert(!seventeen.isMultipleSeventeen(18));

  console.log("テストが正常に完了しました");
});
