import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { delay, motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState("dark");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="overflow-hidden bg-bgWhite dark:bg-bgBlack ">
      <div className="flex absolute right-0 top-20 md:top-0 transform duration-150">
        <div className="mr-3 mt-5 font-semibold dark:text-white">
          {" "}
          Dark Mode
        </div>
        <label className="inline-flex relative items-center mr-5 mt-5 cursor-pointer">
          <div>
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
                toggleTheme();
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] bg-sideBarGreen after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-bgSecondaryBlack"
            ></div>
          </div>
        </label>
      </div>
      <motion.nav
        initial={{ x: -120 }}
        animate={{ x: 0 }}
        transition={{
          default: { ease: "linear" },
        }}
        className="group bg-sideBarGreen dark:bg-bgSecondaryBlack pb-4 h-20 md:h-screen text-white w-full md:w-28 md:hover:w-52 fixed top-0 left-0 duration-300 z-1 md:inline z-30"
      >
        <div className="bg-cubeBlue dark:bg-bgThirdBlack w-full h-28 hidden md:flex justify-center items-center">
          <motion.p className=" text-5xl ">Dk</motion.p>
        </div>
        <ul className="flex md:flex-col justify-evenly md:justify-between items-center mt-7 md:mt-28 h-2/5">
          <li>
            <a
              href="#home"
              className="flex md:flex-row flex-col justify-center items-center hover w-20 md:w-36 h-16 hover:bg-cubeBlue dark:hover:bg-bgThirdBlack rounded-lg duration-100"
            >
              <motion.img
                whileHover={{ scale: 1.2, rotate: 180 }}
                className="w-6 h-6"
                src="home.svg"
              />
              <motion.p
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.1,
                  rotate: -30,
                  borderRadius: "100%",
                }}
                className="md:hidden group-hover:inline font-semibold md:ml-3"
              >
                HOME{" "}
              </motion.p>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex flex-col md:flex-row justify-center items-center hover w-20 md:w-36 h-16 hover:bg-cubeBlue rounded-lg duration-100 dark:hover:bg-bgThirdBlack"
            >
              <motion.img
                whileHover={{ scale: 1.2, rotate: 180 }}
                className="w-6 h-6"
                src="about.svg"
              />
              <motion.p
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.1,
                  rotate: -30,
                  borderRadius: "100%",
                }}
                className="md:hidden group-hover:inline font-semibold md:ml-3"
              >
                ABOUT{" "}
              </motion.p>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="flex flex-col md:flex-row justify-center items-center hover w-20 md:w-36 h-16 hover:bg-cubeBlue dark:hover:bg-bgThirdBlack rounded-lg duration-100"
            >
              <motion.img
                whileHover={{ scale: 1.2, rotate: 180 }}
                className="w-6 h-6"
                src="skills.svg"
              />
              <motion.p
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.1,
                  rotate: -30,
                  borderRadius: "100%",
                }}
                className="md:hidden group-hover:inline font-semibold md:ml-3"
              >
                SKILLS{" "}
              </motion.p>
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="flex flex-col md:flex-row justify-center items-center hover w-20 md:w-36 h-16 hover:bg-cubeBlue dark:hover:bg-bgThirdBlack rounded-lg duration-100"
            >
              <motion.img
                whileHover={{ scale: 1.2, rotate: 180 }}
                className="w-6 h-6"
                src="work.svg"
              />
              <motion.p
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.1,
                  rotate: -30,
                  borderRadius: "100%",
                }}
                className="md:hidden group-hover:inline font-semibold md:ml-3"
              >
                WORK{" "}
              </motion.p>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hidden md:flex flex-col md:flex-row justify-center items-center hover w-24 md:w-36 h-12 hover:bg-cubeBlue dark:hover:bg-bgThirdBlack rounded-lg duration-100"
            >
              <motion.img
                whileHover={{ scale: 1.2, rotate: 180 }}
                className="w-6 h-6"
                src="contact.svg"
              />
              <motion.p
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 1.1,
                  rotate: -30,
                  borderRadius: "100%",
                }}
                className="md:hidden group-hover:inline font-semibold md:ml-3"
              >
                CONTACT{" "}
              </motion.p>
            </a>
          </li>
        </ul>
      </motion.nav>
      <div className="ml-0 md:ml-28">
        <div id="home" className="flex justify-center w-full h-screen mb-1">
          <div className="flex flex-col md:flex-row justify-center items-center w-full mt-24 md:mt-0">
            <motion.div
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
              className="flex w-5/6 md:w-1/2 justify-center items-center "
            >
              <img
                className="rounded-full "
                src="/characterillustration.svg"
                alt="young male asian adult studying on a desk with a computer"
              />
            </motion.div>
            <div className="flex flex-col w-3/4 sm:w-1/2 justify-center mt-5 md:mt-0">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
                className="text-xl font-semibold font-Roboto dark:text-white"
              >
                {" "}
                HI THERE 👋 I'M{" "}
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl md:text-8xl mt-3 mb-3 font-Roboto font-extrabold dark:text-white"
              >
                {" "}
                daesan.{" "}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{ duration: 1, delay: 0.75 }}
                className="text-lg mt-3 mb-3 m-0 lg:mr-52 font-Roboto font-medium dark:text-white"
              >
                {" "}
                A{" "}
                <span className=" text-cubeBlue font-semibold dark:text-aquaBlue ">
                  Front-End Web Developer
                </span>{" "}
                that has a passion for development and problem solving 💻
              </motion.p>
              <div className="flex justify-center md:justify-between mr-0 md:mr-52 mt-5">
                <motion.a
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center items-center bg-sideBarGreen px-9 py-2 text-white rounded-3xl ml-5 font-semibold dark:bg-bgSecondaryBlack"
                  href="/Daesan_Kim_Resume.pdf"
                  target="_blank"
                >
                  {" "}
                  Resume{" "}
                </motion.a>
                <div className="flex items-center w-full justify-end mr-0 md:mr-20">
                  <motion.a
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { delay: 0.25 } }}
                    whileHover={{ scale: 1.2 }}
                    href="https://www.linkedin.com/in/daesan-kim/"
                    target="_blank"
                    className="flex flex-col justify-center items-center w-12 h-12 border-2 rounded-xl border-bgWhite bg-white mr-3 dark:bg-bgSecondaryBlack dark:border-bgSecondaryBlack"
                  >
                    <img className="w-8" src="linkedin.svg" />
                  </motion.a>
                  <motion.a
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.2 }}
                    href="https://github.com/kongdunk"
                    target="_blank"
                    className="flex flex-col justify-center items-center w-12 h-12 border-2 rounded-xl border-bgWhite bg-white dark:bg-bgSecondaryBlack dark:border-bgSecondaryBlack"
                  >
                    <img className="w-6" src="github.svg" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: "20vh", opacity: 0 }}
          whileInView={{ transition: { duration: 1 }, y: 0, opacity: 1 }}
          id="about"
          className="flex flex-col justify-center items-center w-full p-10 md:p-20 pt-28"
        >
          <h2 className="flex w-full text-2xl mb-4 font-Roboto font-semibold dark:text-white ">
            {" "}
            ABOUT ME{" "}
          </h2>
          <p className=" text-base md:text-xl p-10 rounded-3xl bg-white font-Roboto dark:text-white dark:bg-bgThirdBlack leading-9">
            I'm an aspiring frontend developer with a passion for learning. My
            15 years of being a PC gamer has given me a strong foundation to
            become a computer wizard.I'm currently a student at BCIT taking the
            Digital Design and Development program. This program has taught me a
            lot about UX Design and frontend development. But my interest lean
            towards frontend development as I am passionate about programming
            and problem solving. As I come close to finishing my education, I'm
            excited to start my journey as a frontend developer.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: "20vh", opacity: 0 }}
          whileInView={{ transition: { duration: 1 }, y: 0, opacity: 1 }}
          id="skills"
          className="flex flex-col justify-center items-center w-full p-10 md:p-20 dark:text-white"
        >
          <h2 className="flex w-full text-2xl mb-4 font-Roboto font-semibold">
            {" "}
            SKILLS{" "}
          </h2>
          <div className="flex justify-between text-2xl p-10 rounded-3xl bg-white dark:bg-bgThirdBlack flex-wrap min-w-full">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center items-center w-20 h-20 md:w-28 md:h-28 border-2 rounded-2xl border-bgWhite m-3 dark:border-bgThirdBlack dark:bg-bgSecondaryBlack "
            >
              <img className="w-8 md:w-16" src="html.svg" />
              <h3 className="text-sm md:text-base"> HTML </h3>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center items-center w-20 h-20 md:w-28 md:h-28 border-2 rounded-2xl border-bgWhite m-3 dark:border-bgThirdBlack dark:bg-bgSecondaryBlack"
            >
              <img className="w-8 md:w-16" src="css.svg" />
              <h3 className="text-sm md:text-base"> CSS </h3>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center items-center w-20 h-20 md:w-28 md:h-28 border-2 rounded-2xl border-bgWhite m-3 dark:border-bgThirdBlack dark:bg-bgSecondaryBlack"
            >
              <img className="w-8 md:w-16" src="javascript.svg" />
              <h3 className="text-sm md:text-base"> Javascript </h3>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center items-center w-20 h-20 md:w-28 md:h-28 border-2 rounded-2xl border-bgWhite m-3 dark:border-bgThirdBlack dark:bg-bgSecondaryBlack"
            >
              <img className="w-8 md:w-16" src="react.svg" />
              <h3 className="text-sm md:text-base"> React </h3>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center items-center w-20 h-20 md:w-28 md:h-28 border-2 rounded-2xl border-bgWhite m-3 dark:border-bgThirdBlack dark:bg-bgSecondaryBlack"
            >
              <img className="w-8 md:w-16" src="next.svg" />
              <h3 className="text-sm md:text-base"> Next JS </h3>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col justify-center items-center w-20 h-20 md:w-28 md:h-28 border-2 rounded-2xl border-bgWhite m-3 dark:border-bgThirdBlack dark:bg-bgSecondaryBlack"
            >
              <img className="w-8 md:w-16" src="tailwind.svg" />
              <h3 className="text-sm md:text-base"> TailwindCSS </h3>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "20vh", opacity: 0 }}
          whileInView={{ transition: { duration: 1 }, y: 0, opacity: 1 }}
          id="work"
          className="flex flex-col justify-center items-center w-full p-10 md:p-20"
        >
          <h2 className="flex w-full text-2xl mb-4 font-Roboto font-semibold dark:text-white">
            {" "}
            PROJECTS{" "}
          </h2>

          <div className="flex justify-center text-2xl p-10 rounded-3xl bg-white flex-wrap min-w-full dark:bg-bgThirdBlack dark:text-white">
            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mt-8 border-2 rounded-2xl border-bgWhite p-3 md:p-8 dark:border-bgSecondaryBlack dark:bg-bgSecondaryBlack">
              <div className="flex flex-col rounded-lg md:w-2/5">
                <img
                  className=" mb-5"
                  src="burgerplanet.png"
                  alt="Image of a globe with a text that says burger planet."
                  srcSet=""
                />
                <img
                  src="burgerplanet2.png"
                  alt="Image of a hamburger and various buttons."
                  srcSet=""
                />
              </div>
              <div className=" w-full md:w-1/2 mt-5 ">
                <h3 className="font-Roboto text-2xl font-semibold">
                  {" "}
                  Burger Planet
                </h3>
                <h2 className="font-Roboto text-xl leading-10">
                  {" "}
                  Technologies Used:
                  <span className=" text-cubeBlue font-semibold dark:text-aquaBlue">
                    {" "}
                    React , React Three Fiber{" "}
                  </span>
                </h2>
                <ul>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    Built dynamic reusable components for 3D alphabet character
                    mesh models
                  </li>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    Created various interactions with 3D models such as
                    interaction on scroll and interaction on click using react
                    hooks and react three fiber library
                  </li>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    Edited gltf files using blender to customize and edit 3D
                    models for a smoother development of interactions
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a
                    className=" mr-4 underline font-Roboto text-lg"
                    href="https://burgerplanet.vercel.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    className="mr-4 underline font-Roboto text-lg"
                    href="https://github.com/kongdunk/burgerplanet"
                    target="_blank"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mt-8 border-2 rounded-2xl border-bgWhite p-3 md:p-8 dark:border-bgSecondaryBlack dark:bg-bgSecondaryBlack">
              <img
                className="flex rounded-lg md:w-2/5"
                src="pathfinders.png"
                alt="screenshot of a website where you can upload text files and adjust it's text settings"
                srcSet=""
              />
              <div className=" w-full md:w-1/2 mt-5 ">
                <h3 className="font-Roboto text-2xl font-semibold">
                  {" "}
                  Pathfinders
                </h3>
                <h2 className="font-Roboto text-xl leading-10">
                  {" "}
                  Technologies Used:{" "}
                  <span className=" text-cubeBlue font-semibold leading-10 mb-2 dark:text-aquaBlue">
                    NEXT Js, Storybook
                  </span>{" "}
                </h2>
                <ul>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    A web app that helps people with accessibility issues access
                    documents online by adjusting text settings in a document
                  </li>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    Built functional components and various ui components from
                    mock up designs provided by designers in React using styled
                    components and framer motion library
                  </li>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    Used Storybook for ui development to create and test
                    components
                  </li>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    Took part in weekly stand ups to highlight each other’s
                    progress and roadblocks
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a
                    className=" mr-4 underline font-Roboto text-lg"
                    href="https://pathfinder-athena.vercel.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    className="mr-4 underline font-Roboto text-lg"
                    href="https://github.com/hlee443/PathFinder-Athena"
                    target="_blank"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mt-8 border-2 rounded-2xl border-bgWhite p-3 md:p-8 dark:border-bgSecondaryBlack dark:bg-bgSecondaryBlack">
              <img
                className="flex rounded-lg md:w-2/5"
                src="blackjack.png"
                dark:bg-bgSecondaryBlack
                alt="screenshot of a black jack card game website"
                srcSet=""
              />
              <div className="w-full md:w-1/2 mt-5">
                <h3 className="font-Roboto text-2xl font-semibold ">
                  {" "}
                  Black Jack Card Game
                </h3>
                <h2 className="font-Roboto text-xl leading-10">
                  {" "}
                  Technologies Used:{" "}
                  <span className=" text-cubeBlue font-semibold dark:text-aquaBlue">
                    React, REST API
                  </span>{" "}
                </h2>
                <ul>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    Built with React hooks to manage cards in player and dealer
                    hands
                  </li>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    Uses Deck of Cards API to generate deck keys and to shuffle
                    deck of cards randomly
                  </li>
                  <li className="font-Roboto text-base list-disc list-outside mb-2 ml-4">
                    Designed and built UI components and micro animations with
                    framer motion
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a
                    className=" mr-4 underline font-Roboto text-lg"
                    href="https://blackjack-kongdunk.vercel.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    className="mr-4 underline font-Roboto text-lg"
                    href="https://github.com/kongdunk/blackjack"
                    target="_blank"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "20vh", opacity: 0 }}
          whileInView={{ transition: { duration: 1 }, y: 0, opacity: 1 }}
          id="contact"
          className="flex flex-col justify-center items-center w-full p-10 md:p-20 dark:text-white"
        >
          <h2 className="flex w-full text-2xl mb-4 font-Roboto font-semibold">
            {" "}
            Contact{" "}
          </h2>
          <div className="flex flex-col md:flex-row justify-evenly items-center text-2xl p-10 rounded-3xl bg-white flex-wrap min-w-full dark:bg-bgThirdBlack">
            {" "}
            <div className="flex flex-col justify-center items-center w-full md:w-5/12 mt-8 border-2 rounded-2xl border-bgWhite p-16 dark:bg-bgSecondaryBlack dark:border-bgSecondaryBlack">
              {" "}
              <motion.a
                href="https://www.linkedin.com/in/daesan-kim/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3 dark:border-white"
              >
                <img className="w-16" src="linkedin.svg" />
                <h3 className="text-base dark:text-white"> LinkedIn </h3>
              </motion.a>
              <h4 className="font-Roboto text-sm md:text-lg dark:text-white">
                {" "}
                Connect with me
              </h4>
            </div>
            <div className="flex flex-col justify-center items-center w-full md:w-5/12 mt-8 border-2 rounded-2xl border-bgWhite p-16 dark:bg-bgSecondaryBlack dark:border-bgSecondaryBlack">
              {" "}
              <div className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3 dark:border-white">
                <img className="w-16" src="email.svg" />
                <h3 className="text-base dark:text-white"> Email </h3>
              </div>
              <h4 className="font-Roboto text-sm md:text-lg dark:text-white">
                {" "}
                daesan98@gmail.com{" "}
              </h4>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default App;
