import styles from "./Card.module.css";

function Card({ name, title, age, animal }) {
  return (
    <div className={styles.card}>
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>Title: {title}</div>
      <div className={styles.age}>Age: {age}</div>
      <div className={styles.animal}>Favorite Animal: {animal}</div>
    </div>
  );
}

export default Card;
