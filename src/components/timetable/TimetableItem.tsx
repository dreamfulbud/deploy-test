import styles from "./Timetable.module.scss";

export default function TimetableItem({
  item,
  index,
}: {
  item: any;
  index: number;
}) {
  const row = item.times > 1 ? `${index - 2}/${index - 2 + item.times}` : null;

  return (
    <li style={row ? { gridRow: row } : {}}>
      <div className={styles.spaceTime}>
        <p
          className={`${styles.space} ${item.space === "나" && styles.space2}`}
        >
          ROOM <strong>{item.space}</strong>
        </p>
        <p className={styles.time}>{item.time}</p>
      </div>
      <h3 className={styles.title}>
        {item.title}
        {item.subtitle && <span>{item.subtitle}</span>}
      </h3>

      <p className={styles.speaker}>
        <strong>{item.speaker}</strong>
        {item.affiliated && <span>{item.affiliated}</span>}
      </p>
    </li>
  );
}
