import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

function MenuItem({ label, icon: IconComponent, id, path }) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`s-item ${isActive && "s-item-active"}`}
      data-tooltip-id={id}
      data-tooltip-content={label}
      data-tooltip-delay-show={10}
      data-tooltip-delay-hide={10}
    >
      <Tooltip
        id={id}
        place="right"
        className="tooltip"
        style={{
          backgroundColor: "#ffffff",
          color: "#222",
          padding: "2px 10px",
        }}
      />
      <IconComponent className="side-icon" />
    </Link>
  );
}

export default MenuItem;

// s-item-active
