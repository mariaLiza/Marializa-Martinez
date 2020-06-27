import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <div>
        <ul id="footerUl">
          <li>
            <a className="atags"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/marializamartinez/"
            >
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a className="atags"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mariaLiza"
            >
              <p>Github</p>
            </a>
          </li>

          <li>
         <p> © 2020 Tweets, Inc.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
