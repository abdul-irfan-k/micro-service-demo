export const userJWTAcessTokenSecret =
  process.env.NODE_ENV == "TEST"
    ? "accessToken"
    : process.env.USER_JWT_ACCESS_TOKEN_SECRET;
export const userJWTRefreshTokenSecret =
  process.env.NODE_ENV == "TEST"
    ? "refreshToken"
    : process.env.USER_JWT_REFRESH_TOKEN_SECRET;
export const adminJWTAcessTokenSecret =
  process.env.NODE_ENV == "TEST"
    ? "accessToken"
    : process.env.ADMIN_JWT_ACCESS_TOKEN_SECRET;
export const adminJWTRefreshTokenSecret =
  process.env.NODE_ENV == "TEST"
    ? "refreshToken"
    : process.env.ADMIN_JWT_REFRESH_TOKEN_SECRET;
export const frontedUrl = process.env.FRONTEND_URL;
