# JSDoc Sphinx Template

*Generate ReStructured Text from JSDoc3 API documentation that can be further processed by Sphinx.*

Use this template to generate Restructured Text from you JSDoc comments.

The generated documentation can then be
processed by [Sphinx](http://sphinx-doc.org/).

## Getting Started

Use NPM to install JSDoc3 and this template.

```bash
npm install jsdoc
npm install jsdoc-sphinx
```

Assuming your are in your project root folder, you can then generate the documentation using:

```bash
jsdoc -t node_modules/jsdoc-sphinx/template -r JS_SOURCE_DIR/FILE -d OUTPUT_DIR
```

## Reference

- http://usejsdoc.org/

## License
Licensed under The MIT License (MIT)

For the full copyright and license information, please view the LICENSE.txt file.
