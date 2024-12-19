import styles from "./Image.module.css";

function Image() {
  return (
    <img
      src="./images/avatar-jessica.jpeg"
      alt="profile-img"
      className={styles.img}
    />
  );
}
export default Image;
