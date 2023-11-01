import { AnimatePresence } from "framer-motion";
import { paths } from "./Paths";
import { Route, Routes, useLocation } from "react-router";
import Header from "./Header";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Header />

        <Routes location={location} key={location.pathname}>
          {paths.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
