import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/daniel-egidio-b6b8a0181/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/DanielEgiidio"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="mailto:danielegidioti@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
