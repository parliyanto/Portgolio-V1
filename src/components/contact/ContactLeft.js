import React from 'react'
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { bannerImg2  } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-65 object-cover rounded-lg mb-2"
        src={bannerImg2}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-3xl font-bold text-white">Parli Yanto</h3>
        {/* <p className="text-lg font-normal text-gray-400">
          Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+62 87767231577</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ahmadmaulanaparliyanto@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft