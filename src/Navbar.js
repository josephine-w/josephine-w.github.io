import { Link, useMatch, useResolvedPath } from "react-router-dom";
import me from "./assets/me.jpg";
import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <ProfileImage to="/"></ProfileImage>
        <CustomLink to="/experience">experience</CustomLink>
        <CustomLink to="/projects">projects</CustomLink>
      </ul>
    </nav>
  );
}

function ProfileImage({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to}>
      <img src={me} alt="me" className={isActive ? "active" : ""} />
    </Link>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <Link to={to} className={isActive ? "active" : ""} {...props}>
        {children}
      </Link>
    </li>
  );
}
