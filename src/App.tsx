import "./styles/app.scss";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { motion } from "framer-motion";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {
  const variant = {
    visible: { opacity: 1, transition: { duration: 0.4 } },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Header />
        <main>
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
{
  /*  <Wrapper id="main" animationBg={true}> <Main language={language} /> </Wrapper> */
}
