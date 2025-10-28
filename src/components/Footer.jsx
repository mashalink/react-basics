import Counter from "./Counter";
import styles from "./Footer.module.css";

function Footer({ count, setCount }) {
  return (
    <footer className={styles.footer}>
      <p>© 2025 My Website. All rights reserved.</p>
      <Counter count={count} setCount={setCount} />
    </footer>
  );
}

export default Footer;
