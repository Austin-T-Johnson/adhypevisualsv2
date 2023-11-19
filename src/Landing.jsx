import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import AdhypeMain from "./AdhypeMain";
const Landing = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [textFadeIn, setTextFadeIn] = useState(false);
  const [bottomFadeIn, setBottomFadeIn] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Calculate the viewport height
  const viewportHeight = window.innerHeight;
  // Check if the user has scrolled past 100 viewport heights
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    console.log("here:", scrollTop);
    if (scrollTop > 1800) {
      setBottomFadeIn(true);
    }
  });

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setFadeIn(true);
    }, 200);
    return () => clearTimeout(fadeInTimeout);
  }, []);

  useEffect(() => {
    if (fadeIn) {
      const textFadeInTimeout = setTimeout(() => {
        setTextFadeIn(true);
      }, 1000);
      return () => clearTimeout(textFadeInTimeout);
    }
  }, [fadeIn]);

  console.log("here clicked:", clicked);
  return (
    <>
      <div className="h-screen overflow-hidden">
        <Spline
          className={`${
            fadeIn ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
          scene="https://prod.spline.design/KeFTy9Lpu76oQQj4/scene.splinecode"
        />
      </div>
      {/* <AdhypeMain /> */}
      {/* <div
        className={`${
          fadeIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 w-full justify-center flex absolute bottom-[60px]`}
      >
        <span
          onClick={handleClick}
          className="text-white cursor-pointer font-jet animate-blink init text-[20px] transition-transform transform hover:scale-110"
        >
          ENTER...
        </span>
      </div> */}
    </>
  );
};

export default Landing;
