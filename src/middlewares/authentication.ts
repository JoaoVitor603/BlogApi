import { Request } from 'express';
import { get } from 'lodash';
import ApiError from '../utils/apiError.utils';
import { verifyJwt } from '../utils/jwt.utils';

export const expressAuthentication = async (
  request: Request,
  securityName: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scops?: string[]
): Promise<any> => {
  if (securityName === 'bearer_Token') {
    const accessToken = get(request, 'headers.authorization', '').replace(
      /^Bearer\s/,
      ''
    );
    if (!accessToken) {
      throw new ApiError(401, true, 'no token provided');
    }
    const { decoded, expired } = verifyJwt(accessToken);

    if (expired) {
      throw new Error('Your token has expired');
    }

    if (decoded && request.res) {
      request.res.locals.user = decoded;
    }
  }
};
