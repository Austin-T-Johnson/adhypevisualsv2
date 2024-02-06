import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import "../src/App.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const AdhypeMain = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setFadeIn(true);
    }, 300);
    return () => clearTimeout(fadeInTimeout);
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSpans, setVisibleSpans] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 500; // Adjust this threshold as needed

      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const spans = [
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
    "VISUAL CONTENT",
  ];

  useEffect(() => {
    let index = 0;
    let increasing = true;
    const intervalId = setInterval(() => {
      if (increasing) {
        setVisibleSpans((prevVisibleSpans) => [
          ...prevVisibleSpans,
          spans[index],
        ]);
        index++;

        if (index === spans.length) {
          increasing = false;
        }
      } else {
        setVisibleSpans((prevVisibleSpans) => prevVisibleSpans.slice(0, -1));

        if (index === 0) {
          increasing = true;
        } else {
          index--;
        }
      }
    }, 100); // Change the duration (in milliseconds) based on your preference

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className={`${
          fadeIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 min-h-screen`}
      >
        <div className="relative flex justify-center items-center x-sm:w-full x-sm:pt-[150px]">
          <spline-viewer url="https://prod.spline.design/9iEO6dhzbeICjWEI/scene.splinecode"></spline-viewer>

          <div
            className={`absolute top-[calc(57%)] right-[calc(45.75%)] flex flex-col text-center font-['Raleway'] gap-2 4k:top-[calc(54%)] 4k:right-[calc(47.75%)]`}
          >
            <Link to="section1" smooth={true} duration={500}>
              <span className="text-[white] cursor-pointer hover:font-sans">
                Visual Content
              </span>
            </Link>
            <Link to="section2" smooth={true} duration={500}>
              <span className="text-[white] cursor-pointer hover:font-sans">
                Creative Direction
              </span>
            </Link>
            <Link to="section3" smooth={true} duration={500}>
              <span className="text-[white] cursor-pointer hover:font-sans">
                Graphic Design
              </span>
            </Link>
            <Link to="section4" smooth={true} duration={500}>
              <span className="text-[white] cursor-pointer hover:font-sans">
                Web/App Development
              </span>
            </Link>
            <Link to="section5" smooth={true} duration={500}>
              <span className="text-[white] cursor-pointer hover:font-sans">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Element name="section1">
        <div
          className={`mt-[250px] mb-[100px] fade-container ${
            isScrolled ? "fade-in" : "fade-out"
          } w-full text-center flex justify-center`}
        >
          <div className="overflow-hidden w-[100%] h-[80%] rounded-[100px] relative">
            <Spline scene="https://prod.spline.design/bYTFOn46eCZPyoXq/scene.splinecode" />
            <div className="absolute bottom-0 right-[10%] flex flex-col">
              {visibleSpans.map((text, index) => (
                <span
                  id="ui"
                  key={index}
                  className={`text-[white] text-[50px]`}
                >
                  {text}
                </span>
              ))}
            </div>
            <div className="w-[560px] 4k:w-[650px] absolute top-[5%] left-[5%]">
              <span className="text-[white] text-[35px] 4k:text-[50px] font-['momCake'] text-shadow-lg shadow-[black]">
                Specializing in visual content creation we leverage creativity
                and technical skill to bring ideas to life through compelling
                visuals.
              </span>
              {/* <Spline scene="https://prod.spline.design/1oUUrHf6DT1NXviT/scene.splinecode" /> */}
            </div>
          </div>
        </div>
      </Element>
      <Element name="section2">
        <div className={`${isScrolled ? "fade-in" : "fade-out"} relative`}>
          <Spline scene="https://prod.spline.design/N1FrcaGIKwh7WFRF/scene.splinecode" />
          <div className="absolute top-10 w-full flex justify-center">
            <span className="font-['nikea'] text-[white] text-[65px] ">
              CREATIVE DIRECTION
            </span>
          </div>
          <div className="absolute top-1/3 left-[8%] 4k:left-0 w-[400px] 4k:w-[650px] text-center">
            <span className="text-[white] text-[25px] 4k:text-[40px] font-['momCake']">
              It can be the difference between a successful brand and one that
              never takes off. It is a powerful tool, capable of helping you
              connect with your audience on a much deeper level.{" "}
            </span>
          </div>
          <div className="absolute top-2/3 right-[5%] 4k:right-[1%] w-[400px] 4k:w-[650px] text-center">
            <span className="text-[white] text-[25px] 4k:text-[40px] font-['momCake']">
              We combine our expertise in design, strategy, technology, and art
              to develop and empower your brand to its fullest potential.
            </span>
          </div>
        </div>
      </Element>
      <Element name="section3">
        <div className="relative">
          <div className="absolute top-10 w-full flex pl-[25px]">
            <span className="font-['nikea'] text-[white] text-[65px] ">
              GRAPHIC DESIGN
            </span>
          </div>
          <div className="absolute top-[500px] right-5 w-[500px] text-center">
            <span className="text-[white] text-[25px] font-['momCake']">
              A creative discipline that combines art and technology to
              communicate ideas visually. It encompasses a wide range of
              mediums, including digital and print media, to create visually
              compelling and aesthetically pleasing designs. We use various
              tools and techniques to convey messages, evoke emotions, and solve
              problems effectively.
            </span>
          </div>
        </div>

        <Spline scene="https://prod.spline.design/mvs3VTRr9twAo4eL/scene.splinecode" />
      </Element>
      <Element name="section4">
        <div
          className={`${isScrolled ? "fade-in" : "fade-out"} relative h-screen`}
        >
          <Spline scene="https://prod.spline.design/5lmaO4axQanWXiq4/scene.splinecode" />
          <div className="absolute top-10 w-full flex justify-center">
            <span className="font-['nikea'] text-[white] text-[65px] ">
              WEB / APP DEVELOPEMENT
            </span>
          </div>
          <div className="absolute top-2/3 left-[4%] w-[400px] text-center">
            <span className="text-[white] text-[25px] font-['momCake']">
              A complex subject, we as designers and developers have to consider
              both visual appearance and how to convey a clients message.
            </span>
          </div>
          <div className="absolute top-1/3 right-[5%] w-[400px] text-center">
            <span className="text-[white] text-[25px] font-['momCake']">
              We will work with you hand in hand every step of the way to ensure
              your end users will see your core values as well as get to
              navigate a clean, modern, and interactive UI.
            </span>
          </div>
        </div>
      </Element>
      <Element name="section5">
        <div className="relative w-full flex flex-col justify-center text-center mx-auto bg-[#FAF9F6] pb-[50px] h-screen">
          <span className="font-['nikea'] text-[#2D2E32] text-[65px] pb-[50px]">
            CONTACT
          </span>
          <span className="font-['momCake'] text-[#2D2E32] text-[25px] pb-[70px]">
            If you have any questions or just want to say what up shoot us a
            message!
          </span>
          <div className="flex flex-col gap-10 justify-center mx-auto w-[20%] ">
            <TextField id="name" label="Name" variant="outlined" sx={{}} />
            <TextField id="email" label="Email" variant="outlined" />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
            />
            <Button variant="contained" sx={{ bgcolor: "#2D2E32" }}>
              Send it!
            </Button>
          </div>
          <div className="absolute bottom-[-7%] left-[42.5%] flex flex-col">
            <span>Coachella Valley, CA</span>
            <Spline scene="https://prod.spline.design/beR9wVTB31wNAZBS/scene.splinecode" />
          </div>
        </div>
      </Element>
    </>
  );
};

export default AdhypeMain;
