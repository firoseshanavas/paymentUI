import React from "react";
import styles from "./Header.module.css";
import FeatherIcon from "feather-icons-react";
import { Avatar } from "@mui/material";
import { green } from "@mui/material/colors";
const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.lhs}>
        <img src="/Assets/Images/logo.png" alt="logo" />
        <h3>Grave Sites Management</h3>
      </div>
      <div className={styles.center}>
        <button className="transparent-btn">
          <FeatherIcon icon="menu" size={15} />
          Maintain
        </button>

        <button className="transparent-btn">
          <FeatherIcon icon="dollar-sign" size={15} />
          Payments
        </button>
        <button className="transparent-btn">
          <FeatherIcon icon="file-text" size={15} />
          Reports
        </button>
      </div>
      <div className={styles.rhs}>
        <FeatherIcon icon="search" size={20} />
        <FeatherIcon icon="settings" size={20} />
        <FeatherIcon icon="help-circle" size={20} />
        <Avatar sx={{ bgcolor: green[500] }}>JS</Avatar>
        <div className={styles.userNameWrap}>
          <p className={styles.userName}>John Snow</p>
          <p className={styles.userDesignation}>Muncipality Officer</p>
        </div>
        <FeatherIcon icon="chevron-down" size={15} />
      </div>
    </div>
  );
};

export default Header;
