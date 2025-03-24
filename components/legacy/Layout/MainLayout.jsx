// -----------------------------------------------------------------------------
import React from "react";
// -----------------------------------------------------------------------------
import Sidebar from "@/components/legacy/Sidebar/Sidebar";
// -----------------------------------------------------------------------------
import styles from "./MainLayout.module.css";


// -----------------------------------------------------------------------------
function MainLayout({ children, pageName}) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.layoutContainer}>
        <Sidebar pageName={pageName}/>
        <div className={styles.contentContainer}>
          {children}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MainLayout;
