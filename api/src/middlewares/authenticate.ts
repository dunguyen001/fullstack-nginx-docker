import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { response } from '../common';
import { REGEX_EXTRACT_TOKEN } from '../constants';

export async function authenticate(req: Request, resp: Response, next) {
  const authorizationHeader = req.headers.authorization ?? '';

  const matched = authorizationHeader.match(REGEX_EXTRACT_TOKEN);
  if (!matched) return response.unauthorized(resp);

  const token = matched[1];
  try {
    const tokenPayload = await verifyToken(token);


    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError)
      return response.unauthorized(resp);

    next(err);
  }
}

/**
 * @param {string} token
 */
async function verifyToken(token): Promise<any> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, tokenPayload) => {
      err ? reject(err) : resolve(tokenPayload);
    });
  });
}
