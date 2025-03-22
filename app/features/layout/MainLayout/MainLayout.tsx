import { Outlet } from "react-router";
import { useEffect } from "react";

import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import { useAuthStore } from "@src/store/authStore";
import "../../../index.scss";
import "./MainLayout.scss";

export function MainLayout() {
  const initAuth = useAuthStore((state) => state.initAuth);

  useEffect(() => {
    const unsubscribe = initAuth();
    return () => unsubscribe();
  }, [initAuth]);

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
