// We register the TypeScript evaluator in gatsby-config so we don't need to do
// it in any other .js file. It automatically reads TypeScript config from
// tsconfig.json.
require('ts-node').register();

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Use a TypeScript version of gatsby-config.js.
module.exports = require('./gatsby-config.ts');