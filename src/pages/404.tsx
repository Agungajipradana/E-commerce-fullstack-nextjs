import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <>
      <div className={styles.error}>
        <img src="/not_found.png" alt="404" className={styles.error__image} />
        <h1>Page Not Found</h1>
      </div>
    </>
  );
};

export default Custom404;
