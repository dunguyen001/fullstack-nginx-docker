import { ObjectId } from "mongodb";
import { Types} from "mongoose";

export interface IDateBetween {
    $gte?: string | Date
    $lte?: string | Date
}

export type IDate = string | IDateBetween;

export type _ID = string | ObjectId | Types.ObjectId