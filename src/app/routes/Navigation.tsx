import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Main } from "../components/molecules/main/Main";
import { ROUTES } from "./routes";
import { ROUTE_NAMES } from "../constants/routesConstants";

export const Navigation = () => {
  return (
    <Router>
      <Main>
        <Routes>
          {ROUTES.map(
            ({ component: Component, path, isPrivate }) =>
              isPrivate && (
                <Route key={path} path={path} element={<Component />} />
              )
          )}
          <Route path="*" element={<Navigate to={ROUTE_NAMES.HOME.path} />} />
        </Routes>
      </Main>
    </Router>
  );
};
