import { Request, Response } from "express";
import { Singleton } from "../../common";
import exampleService from "./example.service";

class ExamController extends Singleton {
  constructor() {
    super();
  }

  async hello(req: Request, res: Response, next) {
    try {
      const result = await exampleService.hello();
      return res.json({
        message: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ExamController.getInstance<ExamController>();
