// -----------------------------------------------------------------------------
import React from "react";

// -----------------------------------------------------------------------------
const SYMBOL_STYLE = "material-symbols-outlined";



// -----------------------------------------------------------------------------
function MaterialIcon({icon, iconStyle, className, onClick, children})
{
  //
  iconStyle = iconStyle || "";
  className = className || "";

  //
  if(onClick) {
    className += " clickable";
  }

  //
  return (
    <div className={className} onClick={onClick}>
      <span className={`${SYMBOL_STYLE} ${iconStyle}`}>{icon}</span>
      {children}
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MaterialIcon;
