import { Router } from "express";
import exampleController from "./example.controller";


const exampleRouter = Router();

exampleRouter.get('/', exampleController.hello)

export default exampleRouter;
