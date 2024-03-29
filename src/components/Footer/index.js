import React from "react";
import githubLogo from "../../assets/GitHub-Mark-Light-64px.png";
import igLogo from "../../assets/instagramlogo.png";
import linkedinLogo from "../../assets/linkedinlogowhite.png";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
    initial={{y:300, opacity: 0, scale: 1}}
    animate={{y:0, opacity:1, scale:1}}
    transition={{ duration:1 }}>
      <section id="footer">
        {/* <h2 className="section-title">My Pages</h2> */}
        <address>
          <a
            href="https://www.instagram.com/leanlikeajolo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={igLogo}
              alt="Instagram Logo"
              className="footer-logo"
            ></img>
          </a>
          <a
            href="https://github.com/jolocabrera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className="footer-logo"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/jolocabrera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn Logo"
              className="footer-logo"
            ></img>
          </a>
        </address>
      </section>

      <footer>
        <p>Thank you for visiting!</p>
      </footer>
    </motion.div>
  );
}

export default Footer;
