import Link from "next/link";
import styles from "./Login.module.scss";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import googleIcon from "../../../assets/images/login/google-icon.svg";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or password is incorrect");
    }
  };
  return (
    <>
      <div className={styles.login}>
        <h1 className={styles.login__title}>Login </h1>
        {error && <p className={styles.login__error}>{error}</p>}
        <div className={styles.login__form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.login__form__item}>
              <label htmlFor="email" className={styles.login__form__item__label}>
                Email
              </label>
              <div className={styles.login__form__item__email}>
                <input type="text" id="email" name="email" placeholder="email" className={styles.login__form__item__input__email} ref={inputRef} />
              </div>
            </div>
            <div className={styles.login__form__item}>
              <label htmlFor="password" className={styles.login__form__item__label}>
                Password
              </label>
              <div className={styles.login__form__item__password}>
                <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="password" className={styles.login__form__item__input__password} />
                <button type="button" className={styles.login__form__item__showPassword} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <AiFillEye size={25} color="black" /> : <AiFillEyeInvisible size={25} color="black" />}
                </button>
              </div>
            </div>
            <button type="submit" className={styles.login__form__item__button} disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>

          <h6 className={styles.login__form__item__or}>
            <div className={styles.login__form__item__line}></div>
            Or
            <div className={styles.login__form__item__line}></div>
          </h6>

          <button
            onClick={() =>
              signIn("google", {
                callbackUrl,
                redirect: false,
              })
            }
            className={styles.login__form__item__google}
          >
            <Image src={googleIcon} alt="" className={styles.login__form__item__google__icon} />
            Continue with Google
          </button>
        </div>
        <p className={styles.login__link}>
          Don{"'"}t have an account? Sign up{" "}
          <Link href="/auth/register" className={styles.login__link__Link}>
            here
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginView;
