import express from "express";
import cors from "cors";
import passport from "passport";
import logger from "morgan";
import bodyParser from "body-parser";
import timeout from "connect-timeout";

import { LocalLoginStrategy, AuthenticationStrategy } from "./auth";

const applyMiddlewares = (app) => {
  app.use(timeout('500000s'));
  app.use(cors());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(express.json());
  app.use(logger("common"));
  app.use(passport.initialize());
  passport.use(LocalLoginStrategy);
  passport.use(AuthenticationStrategy);
};

export default applyMiddlewares;
