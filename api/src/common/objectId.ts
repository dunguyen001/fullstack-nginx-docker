import { ObjectId } from "mongodb"

export const convertObjectId = (id: string | ObjectId | any) => {
    return typeof id ==='string' ? new ObjectId(id) : id
}