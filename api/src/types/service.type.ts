import { IPagination } from "./pagination.type";

export interface IListOtps {
    pagination?: IPagination;
    sort?: string | object | any;
    select?: string;
}