import { Outlet } from "react-router-dom";

export default function PostLayout() {
  return (
    <div>
      <h2>Post Section</h2>
      <Outlet />
    </div>
  );
}
