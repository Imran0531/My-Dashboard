import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getUser, logout } from "../auth";

export default function Layout() {
  const navigate = useNavigate();
  const user = getUser();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">Pixel Advant</div>
        <nav className="nav">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
            Dashboard
          </NavLink>
          <NavLink to="/planning" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
            Planning
          </NavLink>
          <NavLink to="/configuration" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
            Configuration Screening
          </NavLink>
          {/* <NavLink to="/screening" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>
            Screening
          </NavLink> */}
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="breadcrumbs">Home</div>
          <div className="user-actions">
            <span className="username">{user?.name ?? "User"}</span>
            <button className="btn btn-ghost" onClick={handleLogout}>Logout</button>
          </div>
        </header>

        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
