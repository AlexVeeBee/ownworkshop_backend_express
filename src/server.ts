import basicapi from "./api/basic/routes";
import v1api from "./api/v1/routes";
import { CheckAuth } from "./utils/apiauth";
import "./utils/logger"
const port = process.env.PORT || 3000;
import Express from 'express';
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' });
});


app.use("/basic", basicapi);
app.use("/v1", v1api);

app.use((req, res) => {
  log.error(`404 Not Found: ${req.method} ${req.path}`);
  res.status(404).send("NOT_FOUND_404");
})

// on request
app.use((req, res, next) => {
  log.info(`${req.method} ${req.path}`);
  next();
});

app.listen(port, () => {
  log.success(`Server is running on http://localhost:${port}`);
});
