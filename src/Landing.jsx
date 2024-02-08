import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import AdhypeMain from "./AdhypeMain";
import { useMediaQuery } from "react-responsive";
const Landing = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [textFadeIn, setTextFadeIn] = useState(false);
  const [bottomFadeIn, setBottomFadeIn] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hideText, setHideText] = useState(false);
  const enterRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  // Calculate the viewport height
  const viewportHeight = window.innerHeight;
  // Check if the user has scrolled past 100 viewport heights
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
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

  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  function triggerAnimation() {
    spline.current.emitEvent("mouseDown", "ENTER");
    setHideText(true);
    const waitToTransition = setTimeout(() => {
      setClicked(true);
    }, 1000);
    return () => clearTimeout(waitToTransition);
  }

  return (
    <>
      {!clicked ? (
        <div className="h-screen overflow-hidden relative">
          {isMobile ? (
            <Spline
              scene="https://prod.spline.design/KhqbxzZoCq-yQ7OZ/scene.splinecode"
              onLoad={onLoad}
            />
          ) : (
            <Spline
              className={`${
                fadeIn ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500 `}
              scene="https://prod.spline.design/GC7oSYPpKQCkjpYD/scene.splinecode"
              onLoad={onLoad}
            />
          )}

          {!hideText ? (
            <span
              onClick={triggerAnimation}
              className="cursor-pointer h-6 w-[90px] text-[20px] text-[white] absolute left-[calc(50%-35px)] bottom-[100px] font-['Raleway'] hover:font-sans animate-pulse hover:animate-none"
            >
              ENTER
            </span>
          ) : null}
        </div>
      ) : (
        <AdhypeMain />
      )}
    </>
  );
};

export default Landing;
