import styles from "@/styles/404.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  });
  return (
    <>
      <div className={styles.error}>
        <Image src="/not_found.png" alt="404" width={600} height={600} className={styles.error__image} />
        <h1>Page Not Found</h1>
      </div>
    </>
  );
};

export default Custom404;
