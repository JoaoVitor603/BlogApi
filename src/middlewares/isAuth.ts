import { NextFunction, Request, Response } from 'express';
import { Secret, verify } from 'jsonwebtoken';
import ApiError from '../utils/apiError.utils';
import config from '../config/config';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
  admin: boolean;
}

export default function authentication(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new ApiError(402, true, 'JWT Token is missing.');
  }

  const [, token] = authHeader.split(' ');

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const decodedToken = verify(token, config.jwtSecret as Secret);

    const { sub, admin } = decodedToken as TokenPayload;

    request.user = {
      id: sub,
      // eslint-disable-next-line object-shorthand
      admin,
    };

    return next();
  } catch {
    throw new ApiError(402, true, 'JWT Token is missing.');
  }
}
