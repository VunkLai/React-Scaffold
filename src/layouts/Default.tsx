import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const Default = () => {
  return (
    <article className="min-h-screen">
      <header className="fixed inset-x-0 top-0 h-20 overflow-hidden ">
        <Header />
      </header>
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <footer className="container p-4 footer footer-center bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </article>
  );
};

export default Default;
