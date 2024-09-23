import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2004</p>
          <h2 className="text-3xl md:text-4xl font-bold"> Riwayat Pendidikan</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fakultas Teknik Informatika | Sistem Informasi"
            subTitle="Universitas Bina Sarana Informatika (2021 - 2024)"
            result="3.90/4"
            des="Pembelajaran saya di sana selama 4 tahun mendapatkan nilai dan grade yang sangat memuaskan"
          />
          {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Pengalaman Berkerja</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="IT SUPPORT"
            subTitle="PT SOLUSI MITRA TAMA - (2020 - 2020)"
            result="Jakarta Barat - Kapuk"
            des="Perusahaan yang bergerak di bidang telekomunikasi, job desc saya di sana adalah memaintenance perangkat software maupun hardware"
          />
          <ResumeCard
            title="FRONT END DEVELOPER"
            subTitle="PT INFRA SOLUSI INDONESIA - (2021 - 2022)"
            result="Tangerang - Karawaci"
            des="Perusahaan yang bergerak di bidang jaringan, job desc saya di sana adalah membuat website, mendevelop program dan memaintenance website"
          />
          <ResumeCard
            title="IT SUPPORT DAN WEB DEVELOPER"
            subTitle="PT RAKHASA ARTHA WISESA - (2023 - 2024)"
            result="Jakarta Barat - Jembatan Besi"
            des="Perusahaan yang bergerak di bidang software house yang menyediakan berbagai macam jasa pembuatan website, server cloud, job desc saya di sana adalah melakukan
            pengecekan berkala server, dan mendevelop program website"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
