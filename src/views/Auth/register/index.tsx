import Link from "next/link";
import styles from "./Register.module.scss";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import googleIcon from "../../../assets/images/login/google-icon.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    const data = {
      email: event.target.email.value,
      fullname: event.target.fullname.value,
      password: event.target.password.value,
    };
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };
  return (
    <>
      <div className={styles.register}>
        <h1 className={styles.register__title}>Sign up </h1>
        {error && <p className={styles.register__error}>{error}</p>}
        <div className={styles.register__form}>
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl,
                redirect: false,
              })
            }
            className={styles.register__form__item__google}
          >
            <Image src={googleIcon} alt="" className={styles.register__form__item__google__icon} />
            Continue with Google
          </button>

          <h6 className={styles.register__form__item__or}>
            <div className={styles.register__form__item__line}></div>
            Or
            <div className={styles.register__form__item__line}></div>
          </h6>

          <form onSubmit={handleSubmit}>
            <div className={styles.register__form__item}>
              <label htmlFor="email" className={styles.register__form__item__label}>
                Email
              </label>
              <div className={styles.register__form__item__email}>
                <input type="text" id="email" name="email" placeholder="email" className={styles.register__form__item__input__email} ref={inputRef} />
              </div>
            </div>
            <div className={styles.register__form__item}>
              <label htmlFor="fullname" className={styles.register__form__item__label}>
                Full name
              </label>
              <div className={styles.register__form__item__email}>
                <input type="text" id="fullname" name="fullname" placeholder="fullname" className={styles.register__form__item__input__email} />
              </div>
            </div>
            <div className={styles.register__form__item}>
              <label htmlFor="password" className={styles.register__form__item__label}>
                Password
              </label>
              <div className={styles.register__form__item__password}>
                <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="password" className={styles.register__form__item__input__password} />
                <button type="button" className={styles.register__form__item__showPassword} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <AiFillEye size={25} color="black" /> : <AiFillEyeInvisible size={25} color="black" />}
                </button>
              </div>
            </div>
            <button type="submit" className={styles.register__form__item__button} disabled={isLoading}>
              {isLoading ? "Loading..." : "Sign up"}
            </button>
          </form>
        </div>
        <p className={styles.register__link}>
          Already have an account? Log in{" "}
          <Link href="/auth/login" className={styles.register__link__Link}>
            here
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterView;
