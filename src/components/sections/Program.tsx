"use client";
import styles from "./Program.module.scss";
import Section from "../section/Section";
import { TabButton } from "../tabButton/TabButton";
import { useEffect, useState } from "react";
import Timetable from "../timetable/Timetable";

interface SectionProps {
  id?: string;
  data?: any;
}

export const Program = ({ id, data }: SectionProps) => {
  const [day, setDay] = useState<string>("all");

  const onClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.textContent;

    value && setDay(value);
  };

  return (
    <Section id={id} className={styles.program}>
      <div className="max-wrap2">
        <h3 className="section-title">프로그램 안내</h3>

        <TabButton onClickTab={onClickTab} />

        {day === "all" ? (
          <>
            <Timetable data={data.day1} day="day1" />
            <Timetable data={data.day2} day="day2" />
          </>
        ) : (
          <>
            {day === "day1" ? (
              <Timetable data={data.day1} day="day1" />
            ) : (
              <Timetable data={data.day2} day="day2" />
            )}
          </>
        )}
      </div>
    </Section>
  );
};
