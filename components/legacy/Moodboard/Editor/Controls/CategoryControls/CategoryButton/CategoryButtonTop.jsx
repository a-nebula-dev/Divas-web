// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/legacy/MaterialIcon";
// -----------------------------------------------------------------------------
import style from "./CategoryButton.module.css";

// -----------------------------------------------------------------------------
function CategoryButtonTop({ icon, content, handler }) {
  return (
    <div className={style.categoryContainer} onClick={handler}>
      <MaterialIcon icon={icon} className={style.categoryIcon} />
      <span className={style.categoryTextContent}>{content}</span>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default CategoryButtonTop;
