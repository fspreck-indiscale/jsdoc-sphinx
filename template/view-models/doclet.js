var _ = require('lodash');
var util = require('../util');
var logger = require('jsdoc/util/logger');
module.exports = docletModel;

function docletModel(doclet) {
  return function(context, cb) {
    var viewModel = _.extend({},
      util.rstMixin,
      util.docletChildren(context, doclet, util.mainDocletKinds),
      util.docletChildren(context, doclet, util.subDocletKinds), {
        doclet: doclet,
        example: util.example
      }
    );
    logger.debug('doclet', viewModel.doclet);
    util.view('doclet.rst', viewModel, cb);
  };
}
