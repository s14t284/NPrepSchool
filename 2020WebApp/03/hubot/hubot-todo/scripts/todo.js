/**
 * Description:
 *  TODO を管理することのできるボットです
 * Commands:
 *  todo        - TODO を作成
 *  done        - TODO を完了する
 *  del         - TODO を消す
 *  list        - TODO の一覧表示
 *  donelist    - 完了した TODO の一覧表示
 */
"use strict";
const todo = require("todo");
module.exports = (robot) => {
  robot.respond(/todo (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.todo(task);
    msg.send("追加しました: " + task);
  });
  robot.respond(/done (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.done(task);
    msg.send("完了しました: " + task);
  });
  robot.respond(/del (.+)/i, (msg) => {
    const task = msg.match[1].trim();
    todo.del(task);
    msg.send("削除しました: " + task);
  });
  robot.respond(/list/i, (msg) => {
    const list = todo.list();
    let msgStr;
    if (list.length === 0) {
      msgStr = "(TODO はありません)";
    } else {
      msgStr = list.join("\n");
    }
    msg.send(msgStr);
  });
  robot.respond(/donelist/i, (msg) => {
    const doneList = todo.donelist();
    let msgStr;
    if (doneList.length === 0) {
      msgStr = "(完了した TODO はありません)";
    } else {
      msgStr = doneList.join("\n");
    }
    msg.send(msgStr);
  });
};
