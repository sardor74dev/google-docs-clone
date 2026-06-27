import jwt from "jsonwebtoken";
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  if (!config.ckeditorSecretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'CKEDITOR_SECRET_KEY is not set in .env'
    });
  }

  const tokenPayload = {
    aud: "cdhqewECRtVWWSXK4uo-",
    sub: "sardor-7410",
    user: {
      email: "sardoribragimov.7410@gmail.com",
      name: "Sardor Ibragimov",
      avatar: "https://avatars.githubusercontent.com/u/126222538?v=4"
    },
    auth: {
      collaboration: {
        "<YOUR_DOCUMENT_ID>": {
          role: "writer",
          permissions: ["comment:modify_all"],
        },
      }
    },
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600
  };

  return jwt.sign(tokenPayload, config.ckeditorSecretKey, {
    algorithm: 'HS256'
  });
});
