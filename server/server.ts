import express, { Request, Response } from "express";
import cors from "cors";
import next from "next";

import router from "./router";


const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

(async () => {
    try {
        await app.prepare();
        const server = express();
        server.use(express.json());
        server.use(express.urlencoded({
            extended: true
        }));
        // server.use(cors());

        server.use("/api",router);

        // server.get("/api", (req: Request, res: Response) => {
        //     return res.json("GET API endpoint");
        // });
        server.all("/*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, (err?: any) => {
            if(err) throw err;
            console.log(`> Server started on: http://127.0.0.1:${port}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();