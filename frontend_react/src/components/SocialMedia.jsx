import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <SiGmail />
      </div>
    </div>
  );
};

export default SocialMedia;
