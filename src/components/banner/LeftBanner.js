import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Website Developer.", "Front End Developer", "It Support"],
      loop: true,
      typeSpeed: 10,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">My Portfolio</h4>
        <h1 className="text-6xl font-bold text-white">
          Hai, Saya <span className="text-designColor capitalize">Parli Yanto</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Saya adalah lulusan sistem informasi fakultas teknik informatika saya memiliki ide berfikir yang bisa memberikan ide
          -ide terbaru dan bidang yang saya senangi adalah membuat website<span className="text-sky-500"> Web Developer </span>
           
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ml-4">
            Temukan Saya Disini 
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://www.instagram.com/lii_parlii?igsh=MWRhaGQ3d2R0OWZ6MQ%3D%3D&utm_ssource=qr"><FaInstagram /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://wa.me/${6287767231566}?text=${encodedMessage}"><FaWhatsapp /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://linkedin.com/in/parli-y-b194a2287"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Skill yang sedang saya kuasai saat ini
          </h2>
          <div className="flex justify-center items-center gap-4">
            <span className="bannerIcon2">
              <FaReact />
            </span>
            <span className="bannerIcon2">
              <FaBootstrap />
            </span>
            <span className="bannerIcon2">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner