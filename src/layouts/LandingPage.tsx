import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const LandingPage = () => {
  return (
    <article className="min-h-screen">
      <header className="fixed inset-x-0 top-0 h-20 overflow-hidden ">
        <Header />
      </header>
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <footer className="footer footer-center bg-base-300 text-base-content">
        <div className="container p-4">
          <p>Copyright © 2023</p>
        </div>
      </footer>
    </article>
  );
};

export default LandingPage;
