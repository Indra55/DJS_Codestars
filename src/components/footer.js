import React from 'react';
import insta from '../assets/insta.png';
import discord from '../assets/discord.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <div className="bg-[#0f1112] h-[60px] flex items-center justify-between px-4">
<p className="text-sm text-white">DJS CODESTARS - The Official Competitive Programming Club of DJ Sanghvi</p>
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/djsce_codestars/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://discord.com/invite/xyz" target="_blank" rel="noopener noreferrer">
          <img src={discord} alt="Discord" className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/company/dj-codestars/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
