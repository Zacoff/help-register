import { AppDataSource } from "./data-source"
import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import 'express-async-errors';
import cors from 'cors';
import bodyParser from "body-parser";
import { sectorRouter } from "./routes/Sectors/SectorsRoutes";
import { CustomErrors } from "./errors/CustomError";
import { userRouter } from "./routes/Users/UsersRoutes";
import { requestRouter } from "./routes/Requests/RequestsRoutes";

AppDataSource.initialize().then(async () => {

    const app = express();
    app.use(cors({
        methods : 'GET,OPTIONS,PUT,POST,DELETE',
        origin : '*'
    }))

    app.use(bodyParser.urlencoded({ extended : false }))
    
    app.use(bodyParser.json())

    app.use(sectorRouter);

    app.use(userRouter);

    app.use(requestRouter);

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if(err instanceof CustomErrors) {
            return res.status(err.errorStatus).json({message: err.getErrorMessage()})
        }
        res.status(500).json({status: 'error' , message: "Internal Server Error"})
    })

    app.listen(process.env.PORT, () => console.log('STARTING SERVER'))

}).catch(error => console.log(error))
