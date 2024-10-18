import React from "react";
import { Tooltip } from "react-tooltip";

function TooltipEx({ label, icon: IconComponent = null }) {
  return (
    <div data-tip={label} data-for={`tooltip-${label?.replaceAll(" ", "-")}`}>
      {IconComponent ? <IconComponent className="side-icon" /> : null}
      <Tooltip
        id={`tooltip-${label?.replaceAll(" ", "-")}`}
        effect="solid"
        type="light"
        place="bottom"
        multiline={true}
        offset={{ top: 10, right: 5 }}
        className="tooltip"
        style={{
          backgroundColor: "#ffffff",
          color: "#222",
          padding: "8px",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}

export default TooltipEx;
