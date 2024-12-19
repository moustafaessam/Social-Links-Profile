import styles from "./Content.module.css";

function Content({ children }) {
  return <div className={styles.main}>{children}</div>;
}

export default Content;
