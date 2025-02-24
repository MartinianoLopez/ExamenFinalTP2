import express from "express";
import router from "./routes/Router.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/app", router);

app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    message: "not found",
  });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));