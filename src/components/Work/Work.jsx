import React, { useContext } from "react";
import "./Work.css";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
function Work() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const transition=
  // {
  //   duration:1,
  //   type:'spring',
  // }
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Work Experience</span>
        <span></span>
        <spane>
          <h2>Systems Engineer,INFOSYS LIMITED</h2>
          <li>Develop and Support respective clients.</li>
          <li>
            Collaborated with executive team to define business requirements and
            systems goals.
          </li>
          <li>
            Install, configure, test and maintain operating systems, application
            software and system management tools.
          </li>
          <br />
          <h4>Clients Worked</h4>
          <li>AVON</li>
          <br />
          <li>ROYAL BANK OF SCOTLAND</li>
          <br />
          <li> WALMART</li>
          <br />
          
        </spane>

        <Link to="contact" smooth={true} spy={true}>
          <button className="button s-button">Hire Me</button>
        </Link>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/*right*/}

      <div className="works">
        {/* <div className="w-mainCircle">
  <div className="w-secCircle"> */}
        <div className="awesome">
          <span> </span>
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
          >
            Summary
          </motion.div>
          <spane>
          <h4>EXPERT IN</h4>
          <li>
            Debugged JSON data after development and fix bugs and errors on
            time.
          </li>
          <br />
          <li>Worked in SQL and debugged data.</li>
          <br />
          <li>
            Analyzed key aspects of business to evaluate factors driving results
            and summarized into presentations.
          </li>

          <br />
          <li>Managed maximum 5 production releases in day.</li>
            <br />
            <li>Got trained as JavaScript developer and worked on small tasks during development.</li>
          </spane>

          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
    // </div>
    //  </div>
  );
}

export default Work;
