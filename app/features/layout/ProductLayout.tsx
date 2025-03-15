import { Outlet } from "react-router";

export default function ProjectLayout() {
  return (
    <div>
      <aside>Example sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
