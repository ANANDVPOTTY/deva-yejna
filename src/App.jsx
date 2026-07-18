import { useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import BackToHome from "./components/back-to-home/BackToHome";
import AppRouter from "./router/AppRouter";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      {pathname !== "/" && <BackToHome />}
      <AppRouter />
    </>
  );
};

export default App;
