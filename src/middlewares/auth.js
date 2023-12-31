import jwt from "jsonwebtoken";
import { promisify } from "util";

import authConfing from "../config/auth";
import { decode } from "punycode";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não é válido!" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decode = await promisify(jwt.verify)(token, authConfing.secret);
    req.userId = decode.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token não é válido" });
  }

  // const authenticated = true;

  // if (authenticated) {
  //   return next();
  // } else {
  //   return res.status(401).json();
  // }
};
