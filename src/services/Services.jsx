import React, { useContext } from "react";
import "./Services.css";
import Resume from './RHAGAVI_T_Resume.pdf'
import HeartEmoji from "./../img/heartemoji.png";
import Glasses from "./../img/glasses.png";
import Humble from "./../img/humble.png";

import Card from "./../components/Card/Card";
import { themeContext } from "../Context";
import { motion } from "framer-motion";

function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="Services">
      {/* left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>PROFILE</span>
        <span>SUMMARY</span>
        <spane>
          Technically Sophisticated Professional with almost 5 years of
          experience in the areas of
          <li>Software Development</li>
          <li>Team Management</li>
          <li> Support Analyst</li>
          <br/>
          Exposure to both frontend and backend
          technologies (MERN).<br/>
         Experience in executing projects involving: REST API
          integration/creation.
        </spane>

        <a href="https://drive.google.com/file/d/1Ek4a1KO-WxlNbxxUYEH4KM5Kkl9ENwd3/view?usp=share_link" target="_blank"
              without
              rel="noreferrer" download>
          <button className="button s-button">Open Resume</button>
        </a>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side*/}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frameworks"}
            detail={"Express JS,React JS, Node JS"}
          />
        </motion.div>

        {/* second card */}

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Databases"}
            detail={"MYSQL, Mongo DB"}
          />
        </motion.div>

        {/*third card*/}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"LIBRARIES"}
            detail={"React Redux,Socket.IO"}
            color="rgba(252, 166,31,0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
