import SectionContainer from "../SectionContainer";
import curriculum from "@/assets/NinaMartinhoCurriculum.pdf";
import backgroundImage from "@/assets/hero-background.jpg";
import { motion } from "framer-motion";
import { ArrowBigDown } from "lucide-react";

export default function Hero() {
  return (
    <SectionContainer>
      <div className="w-full relative min-h-[80vh]">
        <img
          src={backgroundImage}
          className="w-full h-full absolute top-0 left-0 -z-10 opacity-40 object-cover "
        />
        <div className=" flex flex-1 flex-col w-full lg:w-1/2 p-20 items-start justify-center gap-10 text-purple-800 relative mt-10">
          <div>
            <h1 className="text-5xl font-bold tracking-[10px]">
              NINA <br /> MARTINHO
            </h1>
            <div className="w-full  flex items-end">
              <h2 className="font-medium text-black">
                GAME ARTIST & ILLUSTRATOR
              </h2>
              <div className="border-b-2 border-purple-800 flex-1 bg-purple-50 mb-1 mx-2" />
            </div>
          </div>

          <p className="text-purple-700 text-xl font-light tracking-[2px]">
            Game artist from São Paulo, Brazil, with a bachelors degree in 3D
            Games Art & Design from the University of Hertfordshire. Passionate
            about creating concept art, illustrations, assets, environments and
            characters for games.
          </p>
          <div className="flex flex-col gap-5">
            <a
              href={curriculum}
              download={true}
              className="text-xl font-light tracking-[3px] bg-transparent text-purple-700 px-5 py-3 text-center border border-purple-700 rounded-full hover:bg-purple-700 hover:text-white transition-colors"
            >
              Curriculum
            </a>
            <a
              href="https://ninamartinho.artstation.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-xl font-light tracking-[3px] bg-transparent text-purple-700 px-5 py-3 text-center border border-purple-700 rounded-full hover:bg-purple-700 hover:text-white transition-colors"
            >
              Artstation
            </a>
          </div>
        </div>
        <motion.a
          href="#portfolio"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-white bg-purple-700 w-10 h-10 flex justify-center items-center rounded-full absolute left-1/2 bottom-10"
        >
          <ArrowBigDown />
        </motion.a>
      </div>
    </SectionContainer>
  );
}
