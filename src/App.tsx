import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="overflow-hidden bg-bgWhite">
      <nav className="group bg-sideBarGreen h-screen text-white w-28 hover:w-52 fixed top-0 left-0 duration-300 z-1">
        <div className="bg-cubeGreen w-full h-24 flex justify-center items-center">
          <p className=" text-5xl ">Dk</p>
        </div>
        <ul className="flex flex-col justify-between items-center mt-28 h-2/5">
          <li>
            <a href="#home" className="flex justify-between items-center m-3">
              <img className="w-6 h-6" src="home.svg" />
              <p className="hidden group-hover:inline pr-10 font-semibold">
                Home{" "}
              </p>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="flex justify-between items-center m-3 hover"
            >
              <img className="w-6 h-6" src="about.svg" />
              <p className="hidden group-hover:inline pr-10 font-semibold">
                About{" "}
              </p>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="flex justify-between items-center m-3 hover"
            >
              <img className="w-6 h-6" src="skills.svg" />
              <p className="hidden group-hover:inline pr-10 font-semibold">
                Skills{" "}
              </p>
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="flex justify-between items-center m-3 hover"
            >
              <img className="w-6 h-6" src="work.svg" />
              <p className="hidden group-hover:inline pr-10 font-semibold">
                Work{" "}
              </p>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex justify-between items-center m-3 hover"
            >
              <img className="w-6 h-6" src="contact.svg" />
              <p className="hidden group-hover:inline pr-10 font-semibold">
                Contact{" "}
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <div className="ml-28">
        <div id="home" className="flex justify-center w-full h-screen">
          <div className="flex justify-center items-center w-full">
            <div className="flex w-1/2 justify-center items-center ">
              <img
                className="rounded-full w-80 h-80"
                src="/doge.jpg"
                alt="image of a cute dog with a hat and a monocle"
              />
            </div>
            <div className="flex flex-col w-1/2 justify-center">
              <h2 className="text-xl font-semibold font-Roboto">
                {" "}
                HI THERE 👋 I'M{" "}
              </h2>
              <h1 className="text-8xl mt-3 mb-3 font-Roboto font-extrabold">
                {" "}
                daesan.{" "}
              </h1>
              <p className="w text-l mt-3 mb-3 mr-52 font-Roboto font-medium">
                {" "}
                I'm Daesan, a cool Front-End Web Developer I like rice and
                basketball and mangos. I like development 💻 and stuff...{" "}
              </p>
              <div className="flex justify-between mr-52 mt-5">
                <a
                  className="flex justify-center items-center bg-sideBarGreen px-9 py-2 text-white rounded-3xl ml-5 font-semibold"
                  href="/src/data/resume_daesan.pdf"
                  download
                >
                  {" "}
                  Resume{" "}
                </a>
                <div className="flex items-center w-full justify-end mr-20">
                  <a
                    href="https://www.linkedin.com/in/daesan-kim/"
                    target="_blank"
                    className="flex flex-col justify-center items-center w-12 h-12 border-2 rounded-xl border-bgWhite bg-white mr-3"
                  >
                    <img className="w-8" src="linkedin.svg" />
                  </a>
                  <a
                    href="https://github.com/kongdunk"
                    target="_blank"
                    className="flex flex-col justify-center items-center w-12 h-12 border-2 rounded-xl border-bgWhite bg-white"
                  >
                    <img className="w-6" src="github.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="flex flex-col justify-center items-center  w-full p-20"
        >
          <h2 className="flex w-full text-2xl mb-4 font-Roboto font-semibold">
            {" "}
            ABOUT ME{" "}
          </h2>
          <p className="text-xl p-10 rounded-3xl bg-white font-Roboto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div
          id="skills"
          className="flex flex-col justify-center items-center w-full p-20"
        >
          <h2 className="flex w-full text-2xl mb-4 font-Roboto font-semibold">
            {" "}
            SKILLS{" "}
          </h2>
          <div className="flex justify-between text-2xl p-10 rounded-3xl bg-white flex-wrap min-w-full">
            <div className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3">
              <img className="w-16" src="html.svg" />
              <h3 className="text-base"> HTML </h3>
            </div>
            <div className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3">
              <img className="w-16" src="css.svg" />
              <h3 className="text-base"> CSS </h3>
            </div>
            <div className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3">
              <img className="w-16" src="javascript.svg" />
              <h3 className="text-base"> Javascript </h3>
            </div>
            <div className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3">
              <img className="w-16" src="react.svg" />
              <h3 className="text-base"> React </h3>
            </div>
            <div className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3">
              <img className="w-16" src="next.svg" />
              <h3 className="text-base"> Next JS </h3>
            </div>
            <div className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3">
              <img className="w-16" src="tailwind.svg" />
              <h3 className="text-base"> TailwindCSS </h3>
            </div>
          </div>
        </div>

        <div
          id="work"
          className="flex flex-col justify-center items-center w-full p-20"
        >
          <h2 className="flex w-full text-2xl mb-4 font-Roboto font-semibold">
            {" "}
            PROJECTS{" "}
          </h2>
          <div className="flex justify-center text-2xl p-10 rounded-3xl bg-white flex-wrap min-w-full">
            <div className="flex justify-around w-11/12 mt-8 border-2 rounded-2xl border-bgWhite p-16">
              <img
                className=" flex rounded-lg w-76 h-44"
                src="pathfinders.png"
                alt=""
                srcSet=""
              />
              <div className=" w-1/2 ">
                <h3 className="font-Roboto text-2xl font-semibold">
                  {" "}
                  Pathfinders
                </h3>
                <h2 className="font-Roboto text-xl">
                  {" "}
                  Technologies Used: NEXT, Storybook,{" "}
                </h2>
                <ul>
                  <li className="font-Roboto text-lg list-disc">
                    Web app that helps people with accessibility issues access
                    documents online by adjusting text settings
                  </li>
                  <li className="font-Roboto text-lg list-disc">
                    Built with hooks and functional components
                  </li>
                  <li className="font-Roboto text-lg list-disc">
                    Used Storybook for building UI components
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
            <div className="flex justify-around w-11/12 mt-8 border-2 rounded-2xl border-bgWhite p-16">
              <img
                className="rounded-lg w-76 h-44"
                src="beequizapp.png"
                alt=""
                srcSet=""
              />
              <div className=" w-1/2 ">
                <h3 className="font-Roboto text-2xl font-semibold">
                  {" "}
                  Bee Quiz App
                </h3>
                <h2 className="font-Roboto text-xl">
                  {" "}
                  Technologies Used: NEXT, Next Router{" "}
                </h2>
                <ul>
                  <li className="font-Roboto text-lg list-disc">
                    Interactive Quiz App about Bees
                  </li>
                  <li className="font-Roboto text-lg list-disc">
                    Used Next Router to create client-side route transitions
                    between pages
                  </li>
                </ul>
                <div className="flex justify-end">
                  <a
                    className=" mr-4 underline font-Roboto text-lg"
                    href="https://bruhhh-six.vercel.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    className="mr-4 underline font-Roboto text-lg"
                    href="https://github.com/daesanTheRiceologist/bruhhh"
                    target="_blank"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-around w-11/12 mt-8 mb-8 border-2 rounded-2xl border-bgWhite p-16">
              <img
                className="rounded-lg w-76 h-44"
                src="blackjack.png"
                alt=""
                srcSet=""
              />
              <div className=" w-1/2 ">
                <h3 className="font-Roboto text-2xl font-semibold ">
                  {" "}
                  Black Jack Card Game
                </h3>
                <h2 className="font-Roboto text-xl">
                  {" "}
                  Technologies Used: React, REST API{" "}
                </h2>
                <ul>
                  <li className="font-Roboto text-lg list-disc">
                    Built with React hooks
                  </li>
                  <li className="font-Roboto text-lg list-disc">
                    Cards data pulled from Deck of Cards API{" "}
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
        </div>

        <div
          id="contact"
          className="flex flex-col justify-center items-center w-full p-20"
        >
          <h2 className="flex w-full text-2xl mb-4 font-Roboto font-semibold">
            {" "}
            Contact{" "}
          </h2>
          <div className="flex justify-evenly text-2xl p-10 rounded-3xl bg-white flex-wrap min-w-full">
            {" "}
            <div className="flex flex-col justify-center items-center w-5/12 mt-8 border-2 rounded-2xl border-bgWhite p-16">
              {" "}
              <a
                href="https://www.linkedin.com/in/daesan-kim/"
                target="_blank"
                className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3"
              >
                <img className="w-16" src="linkedin.svg" />
                <h3 className="text-base"> LinkedIn </h3>
              </a>
              <h4 className="font-Roboto text-lg"> Connect with me</h4>
            </div>
            <div className="flex flex-col justify-center items-center w-5/12 mt-8 border-2 rounded-2xl border-bgWhite p-16">
              {" "}
              <div className="flex flex-col justify-center items-center w-28 h-28 border-2 rounded-2xl border-bgWhite m-3">
                <img className="w-16" src="email.svg" />
                <h3 className="text-base"> Email </h3>
              </div>
              <h4 className="font-Roboto text-lg"> daesan98@gmail.com </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
