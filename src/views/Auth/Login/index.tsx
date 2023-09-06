import { useRouter } from "next/router";
import Link from "next/link";
import style from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();
  const handlerLogin = () => {
    push("/product");
  };
  return (
    <div className={style.login}>
      <h1 className="text-3xl">Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}>
        Belum punya akun? Registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
