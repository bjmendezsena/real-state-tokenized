import { ROUTE_NAMES } from "../constants/routesConstants";
import {
  LoginPage,
  NudesPage,
  OportunitiesPage,
  PortFolioPage,
  RegisterPage,
} from "../pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    ...ROUTE_NAMES.LOGIN,
    component: LoginPage,
  },
  {
    ...ROUTE_NAMES.REGISTER,
    component: RegisterPage,
  },
  {
    ...ROUTE_NAMES.PORTFOLIO,
    component: PortFolioPage,
  },
  {
    ...ROUTE_NAMES.NUDES,
    component: NudesPage,
  },
  {
    ...ROUTE_NAMES.OPPORTUNITIES,
    component: OportunitiesPage,
  },
];
