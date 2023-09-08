import { signIn, useSession, signOut } from "next-auth/react";
import styles from "./Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <>
      <div className={styles.navbar}>
        <div className="big">Navbar</div>
        <div className={styles.profile}>
          {data?.user?.image && <Image className={styles.avatar} src={data.user.image} alt={data.user.fullname} width={30} height={30} />}
          {data && data.user.fullname}
          {data ? (
            <button className={styles.button} onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <button className={styles.button} onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
