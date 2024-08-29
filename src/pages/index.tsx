import { FC } from "react";
import { useSession } from "next-auth/react";
import scss from "../components/Layout/Layout.module.scss";
import Dashboard from "./dashboard";
import Login from "../components/Login";

const Home: FC = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;
