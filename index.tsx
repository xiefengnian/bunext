import express from "express";
import { matchRoutes, routes } from "./app/routes";
import { renderToString } from "react-dom/server";
import React from "react";
import { compile } from "./compile";
import { join } from "path";
import { StaticRouter } from "react-router-dom";
import { App } from "./app/app";

compile();

const app = express();

app.listen(3200, () => {
  console.log("Server Running in Port: 3200");
});

app.use("/static", express.static(join(__dirname, "./static")));

app.get(/./, async (req, res) => {
  let result = matchRoutes(req.path);

  let context = {};
  let react = renderToString(
    <StaticRouter location={{ pathname: "/detail" }} context={context}>
      <App routes={routes} />
    </StaticRouter>
  );

  let html = `
      <html>
        <body>
          <div id="root">${react}</div>
        </body>
        <script src="/static/bundle.js"></script>
      </html>
    `;
  res.send(html);
});
