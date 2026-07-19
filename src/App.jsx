import { useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import BackToHome from "./components/back-to-home/BackToHome";
import AppRouter from "./router/AppRouter";

const App = () => {
  const { pathname } = useLocation();
  const hideChrome = pathname === "/about/areas-of-expertise";

  return (
    <>
      {!hideChrome && <Header />}
      {pathname !== "/" && !hideChrome && <BackToHome />}
      <AppRouter />
    </>
  );
};

export default App;
