import { Router } from "express";

const basicapi = Router({
    mergeParams: true
});

basicapi.get("/basic/hello", (req, res) => {
    res.send({ message: 'Hello World' });
});

basicapi.use("/basic", (req, res) => {
    res.status(404).send("NOT_FOUND");
});

export default basicapi;