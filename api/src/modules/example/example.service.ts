import { Singleton } from "../../common";

class ExamService extends Singleton {
    constructor() {
        super()
    }

    hello() {
        return "world"
    }
}


export default ExamService.getInstance<ExamService>();