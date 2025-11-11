import styles from "./CardList.module.css";
import Card from "./Card.jsx";

export default function CardList({ employees }) {
  return (
    <div className={styles.cardList}>
      {employees.map((employee) => (
        <Card
          key={employee.id}
          name={employee.name}
          title={employee.title}
          age={employee.age}
          animal={employee.animal}
        />
      ))}
    </div>
  );
}
