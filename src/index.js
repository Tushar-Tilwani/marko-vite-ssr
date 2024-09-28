import { Router } from "express";
// import indexPage from "./pages/index";
// import usersService from "./services/users";
// import itmPage from "./pages/itm";

import routes from "./routes.js";

export const router = Router();

routes.forEach((route) => {
  router[route.method || "get"](route.path, route.handler);
});
