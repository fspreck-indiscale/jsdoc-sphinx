var _ = require('lodash');
var helper = require('jsdoc/util/templateHelper');
var util = require('../util');
var logger = require('jsdoc/util/logger');

module.exports = home;

function home(context, cb) {
  var viewModel = _.extend({
      package: helper.find(context.data, {kind: 'package'})[0]
    }, util.docletChildren(context, null, util.mainDocletKinds),
    util.docletChildren(context, null, util.subDocletKinds),
    util.rstMixin,
    _.pick(context, ['readme'])
  );

  logger.debug('home namespaces', viewModel.namespaces);

  util.view('home.rst', viewModel, cb);
}
