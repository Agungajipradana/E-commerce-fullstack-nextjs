import { useRouter } from "next/router";
import { DM_Sans } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Navbar"));
const Footer = dynamic(() => import("../Footer"));

type AppShellProps = {
  children: React.ReactNode;
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <>
      <main className={dmSans.className}>
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
        {!disableNavbar.includes(pathname) && <Footer />}
      </main>
    </>
  );
};

export default AppShell;
