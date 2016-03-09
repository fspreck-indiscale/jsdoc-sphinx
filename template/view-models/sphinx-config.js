var helper = require('jsdoc/util/templateHelper');
var util = require('../util');

module.exports = config;

function config(context, cb) {
  var viewModel = {
    package: helper.find(context.data, {kind: 'package'})[0]
  };

  util.view('conf.py', viewModel, cb);
}
