import styles from "./Text.module.css";

function Text() {
  return (
    <>
      <div className={styles.mainTextBox}>
        <h1 className={styles.header}>Jessica Randall</h1>
        <p className={styles.location}>London, United Kingdom</p>
      </div>
      <div className={styles.desc}>"Front-end developer and avoid reader."</div>
    </>
  );
}

export default Text;
