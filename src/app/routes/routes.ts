import { NotAvalaible } from "../components/atoms/notavalaible/NotAvalaible";
import { ROUTE_NAMES } from "../constants/routesConstants";
import { JSXComponent } from "../interfaces/appInterfaces";
import {
  LoginPage,
  NudesPage,
  OportunitiesPage,
  PortFolioPage,
  RegisterPage,
} from "../pages";

export interface Route {
  path: string;
  component: JSXComponent;
  name: string;
  children?: Route[];
  isPrivate: boolean;
  isAvaliable: boolean;
}

export const ROUTES: Route[] = [
  {
    ...ROUTE_NAMES.HOME,
    component: PortFolioPage,
    isPrivate: true,
    isAvaliable: true,
  },
  {
    ...ROUTE_NAMES.LOGIN,
    component: LoginPage,
    isPrivate: false,
    isAvaliable: true,
  },
  {
    ...ROUTE_NAMES.REGISTER,
    component: RegisterPage,
    isPrivate: false,
    isAvaliable: true,
  },

  {
    ...ROUTE_NAMES.NUDES,
    component: NudesPage,
    isPrivate: true,
    isAvaliable: true,
  },
  {
    ...ROUTE_NAMES.OPPORTUNITIES,
    component: OportunitiesPage,
    isPrivate: true,
    isAvaliable: true,
  },
  {
    ...ROUTE_NAMES.REPORTS,
    component: NotAvalaible,
    isPrivate: true,
    isAvaliable: false,
  },
  {
    ...ROUTE_NAMES.PROFILE,
    component: NotAvalaible,
    isPrivate: true,
    isAvaliable: false,
  },
  {
    ...ROUTE_NAMES.INBOX,
    component: NotAvalaible,
    isPrivate: true,
    isAvaliable: false,
  },
  {
    ...ROUTE_NAMES.SETTINGS,
    component: NotAvalaible,
    isPrivate: true,
    isAvaliable: false,
  },
];
