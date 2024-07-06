import type { Request, Response } from "express";

export const CheckAuth = (req: Request, res: Response, next: Function) => {
    log.info("Checking Auth");
    if (req.headers.authorization) {
        console.log(req.headers);
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}