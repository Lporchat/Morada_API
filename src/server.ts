import express from "express";
import morgan from "morgan";

import './src/shared/infra/typeorm';

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.json({ mensager: true });
});

app.listen(3000, () => console.log("its running !!! 🙈"));