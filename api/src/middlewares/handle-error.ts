import { BaseError, response } from "../common";

export async function handleError (err, req, resp, next) {
  return response.badRequest(resp, err.message);
}