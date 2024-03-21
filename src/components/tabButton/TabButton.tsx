"use client";
import { useState } from "react";
import styles from "./TabButton.module.scss";
export const TabButton = ({ onClickTab }: { onClickTab: any }) => {
  const tabList = ["All", "Day1", "Day2"];
  return (
    <div className={styles.tab}>
      <button type="button" onClick={onClickTab}>
        all
      </button>
      <button type="button" onClick={onClickTab}>
        day1
      </button>
      <button type="button" onClick={onClickTab}>
        day2
      </button>
    </div>
  );
};
