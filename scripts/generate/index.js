const componentGenerator = require('./component');
const contextGenerator = require('./context');
const pageGenerator = require('./page');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('context', contextGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.setHelper('leftCurlyBracket', () => '{');
  plop.setHelper('rightCurlyBracket', () => '}');
};
