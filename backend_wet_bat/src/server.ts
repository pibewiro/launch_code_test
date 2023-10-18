import "reflect-metadata";
import "dotenv/config";
import "./Infra/Database";

import app from "./Infra/HttpServer";

const PORT = process.env.API_PORT || 4000;
app.listen(PORT, () =>
  console.log(`Connected to port ${process.env.API_PORT}`)
);
