import { Outlet } from "react-router";

import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import "../../../index.scss";
import "./MainLayout.scss";

export function MainLayout() {
  return (
    <div>
      <Navigation />
      <div className="content__wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
