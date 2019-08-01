"use strict";
// @flow
const Koa = require("koa");
const serve = require("koa-static");
const bodyParser = require("koa-bodyparser");
const path = require("path");
const { linkRoutes, indexRoute } = require("./routes");
const { DAO } = require("./DAO");
const { links } = require("./data"); // eslint-disable-line no-unused-vars
const config = require("./constants");

const dao = new DAO(config);
const app = new Koa();

// eslint-disable-next-line no-undef
app.use(serve(path.join(__dirname, "../client/build")));
app.use(bodyParser());
app.use(indexRoute.routes());
app.use(linkRoutes.routes());

dao.connect(() => {
  /*const initData = {
    tableName: 'links',
    dataList: links
  };
  dao.init(initData, () => {console.log('SUCCESS');});*/
});

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`); // eslint-disable-line no-console
});
