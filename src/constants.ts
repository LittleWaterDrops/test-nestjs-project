import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'development'
      ? '.env.development'
      : process.env.NODE_ENV === 'production'
      ? '.env.production'
      : '.env',
  ),
});

const {
  NEST_HOST,
  NEST_PORT,
  MONGO_HOST,
  MONGO_COLLECTION,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_TTL,
  REDIS_PASSWORD,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  JWT_ACCESS_TIME,
  JWT_REFRESH_TIME,
  JWT_TOKEN_ISSUER,
} = process.env;

namespace Constants {
  export const nest = {
    host: NEST_HOST,
    port: +NEST_PORT,
  };

  export const mongo = {
    host: MONGO_HOST,
    collection: MONGO_COLLECTION,
  };

  export const redis = {
    host: REDIS_HOST,
    port: REDIS_PORT,
    ttl: +REDIS_TTL,
    // password: REDIS_PASSWORD,
  };

  export const jwt = {
    accessSecret: JWT_ACCESS_SECRET,
    refreshSecret: JWT_REFRESH_SECRET,
    accessTime: JWT_ACCESS_TIME,
    refreshTime: JWT_REFRESH_TIME,
    tokenIssuer: JWT_TOKEN_ISSUER,
  };
}

export default Constants;
