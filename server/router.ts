import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/",(_req: Request, res: Response) => {
    return res.json("GET API");
});

export default router;