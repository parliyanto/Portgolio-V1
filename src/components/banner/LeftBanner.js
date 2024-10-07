import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaReact, FaBootstrap, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, } from "react-icons/si";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { myfile } from "../../assets/index";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Website Developer.", "Front End Developer.", "It Support.", "Wordpress Developer."],
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">My Portfolio</h4>
        <h1 className="text-6xl font-bold text-white">
          HI Me <span className="text-designColor capitalize">Parli Yanto</span>
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
        I am a graduate of information systems at the faculty of informatics engineering, I like working teams and I like challenges such as creating websites and also coding.
           
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between items-center">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 ml-4 flex items-center justify-center">
            Find Me Here 
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://www.instagram.com/lii_parlii?igsh=MWRhaGQ3d2R0OWZ6MQ%3D%3D&utm_ssource=qr"><FaInstagram /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://wa.me/87767231577?text=halo saya parli silahkan lanjut ke chat untuk melanjutkan"><FaWhatsapp /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://linkedin.com/in/parli-y-b194a2287"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          Skills that I am currently mastering
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
            <span className="bannerIcon2">
              <FaWordpress />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full p-5 hover:bg-sky-500 bg-black shadow-black font-medium uppercase rounded-md cursor-pointer">
      <a href={myfile}>Preview My Cv</a>
      <IoCloudDownloadOutline className="ml-5 text-lg"/>
     </div> 
    </div>
  );
}

export default LeftBanner
