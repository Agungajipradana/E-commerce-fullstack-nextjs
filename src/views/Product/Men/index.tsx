import styles from "./Men.module.scss";
import BrandNikeMen from "@/views/PopularBrand/Nike/Men";

const MenView = () => {
  return (
    <>
      <div className={styles.men}>
        <h1 className={styles.men__h1}>Men Product</h1>
        {/* <BrandNikeMen /> */}
      </div>
    </>
  );
};

export default MenView;
