import { Outlet } from "react-router";

import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import "../../index.scss";

export default function MainLayout() {
  return (
    <div>
      <Navigation />
      <div style={{ padding: "var(--spacer-xl)" }} className="content__wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
