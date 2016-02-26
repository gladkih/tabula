const fs = require('fs');
const tasks = fs.readdirSync('./gulp/tasks/');
require('require-dir')('tasks', {recurse: true});
