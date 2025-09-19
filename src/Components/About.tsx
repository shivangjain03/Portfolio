import { useEffect, useState } from "react";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";

const About = () => {
  const [dots, setDots] = useState<any>(null);
  const [trunk, setTrunk] = useState<any>(null);

  useEffect(() => {
    if (!dots) {
      setDots(
        DOTS({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x4cbbd4,
          backgroundColor: 0x121212,
          size: 2.8,
          spacing: 20,
          showLines: false,
        })
      );
    }
    if (!trunk) {
      setTrunk(
        TRUNK({
          el: "#photo",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x4cbbd4,
          backgroundColor: 0x121212,
          chaos: 4.0,
          spacing: 0,
        })
      );
    }
    return () => {
      if (dots) dots.destroy();
      if (trunk) trunk.destroy();
    };
  }, [dots, trunk]);

  const btn =useMatches({
    xs:'xs',
    sm:'sm',
    md:'md',
    lg:'lg'
  })

  return (

    <div
      className="flex  overflow-hidden items-center justify-around px-16 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 font-mono h-[80vh] lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-4 md-mx:px-6  "
      id="bg"
    >
      <div className="ml-10 w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center">
        <div className="text-3xl text-primaryColor lg:text-2xl xs-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
        <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:size-[27px]">
          Shivang Jain
        </div>
        <div className="text-white text-4xl flex font-semibold lg-mx:text-[25.5px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
          I'm a&nbsp;
          <span className="text-primaryColor">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Full Stack Developer",
                  "Competitive Programmer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="text-textColor w-[90%] text-justify mb-6 text-xl font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">
          I am a dedicated 3rd-year Computer Science student @ Simon Fraser
          University. My experience includes web development, where I design
          and implement dynamic, user-centric solutions. I am driven by a deep
          curiosity for emerging technologies and a commitment to solving
          complex problems.
        </div>
        <Button
          component="a"
          target="_blank"
          href="https://drive.google.com/file/d/1a9Bbre85PVXlPGpux-qcDCl-MDvJbg5r/view?usp=sharing"
          className="!text-bgColor !w-fit"
          size={btn}
          variant="filled"
          color="#4cbbd4"
        >
          Check Resume
        </Button>
      </div>

      <div className="h-[50vh] overflow-hidden bs:mr-14 w-[25vw]" id="photo">
        <img src="/profile.png" alt="Shivang's Bitmoji" />
      </div>
    </div>
  );
};

export default About;
