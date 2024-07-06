import { Router } from "express";
import { CheckAuth } from "../../utils/apiauth";

const v1api = Router({
    mergeParams: true,
});

v1api.get("/info/get", (req, res) => {
    res.send({ message: 'Hello World' });
});

v1api.get("/", CheckAuth, (req, res) => {
    res.send({ message: 'Hello World' });
});

v1api.use("/v1", (req, res, next) => {
    res.status(404).send("NOT_FOUND");
});

export default v1api;