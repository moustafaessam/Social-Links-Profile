import styles from "./Links.module.css";

const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

function Links() {
  return (
    <div className={styles.linkBox}>
      {links.map((e) => {
        return (
          <p key={e} className={styles.links}>
            {e}
          </p>
        );
      })}
    </div>
  );
}

export default Links;
