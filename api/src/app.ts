import express from "express";
import session, { Store } from "express-session";
import { SESSION_OPTIONS } from "./config";
import { clientError, internalServerError } from "./errors";
import { register } from "./routes";

export const createApp = (store: Store) => {  
  const app = express();

  app.use(express.json());

  app.use(
    session({
      ...SESSION_OPTIONS,
      store,
    })
  );

  app.use(register);

  app.use(clientError);

  app.use(internalServerError);

  return app;
};