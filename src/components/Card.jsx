import styles from "./Card.module.css";

function Card({ name, title, age }) {
  return (
    <div className={styles.card}>
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>Title: {title}</div>
      <div className={styles.age}>Age: {age}</div>
    </div>
  );
}

export default Card;
