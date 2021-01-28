const componentGenerator = require('./component');
const contextGenerator = require('./context');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('context', contextGenerator);
};
