import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <article className="min-h-screen hero">
      <Outlet />
    </article>
  );
};

export default Default;
