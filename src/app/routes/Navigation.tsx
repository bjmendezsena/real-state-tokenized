import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

export const Navigation = () => {
  const checkIsActive = ({ isActive }: any) => (isActive ? "nav-active" : "");

  return <div>Router</div>;
};
