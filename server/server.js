const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = ({ port, cb }) => {
  app.listen(port, cb);
};
