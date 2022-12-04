import "./styles/app.scss";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { motion } from "framer-motion";
import AboutMe from "./components/AboutMe/AboutMe";
import { useEffect, useState } from "react";
import { AnimationLoad } from "./utils/AnimationLoad/AnimationLoad";

const App = () => {

  //is Page Load
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const onPage = () => {
      setPlay(true);
    };
    if (document.readyState === "complete") {
      onPage();
    } else {
      window.addEventListener("load", onPage);
    }
    return () => window.removeEventListener("load", onPage);
  }, []);

  return (
    <>
      <Header />
      {!play ? (
        <AnimationLoad />
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <main>
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;

