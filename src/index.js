var list = require('./list.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  all:list,
  random:uniqueRandomArray(list)
}
