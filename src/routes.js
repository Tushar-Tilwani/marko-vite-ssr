import indexPage from "./pages/index";
import usersService from "./services/users";
import itmPage from "./pages/itm";

const routes = [
  {
    path: "/",
    handler: indexPage,
    method: "get"
  },
  {
    path: "/services/users",
    handler: usersService,
  },
  {
    path: "/itm",
    handler: itmPage,
    method: "get"
  },
];

export default routes;
