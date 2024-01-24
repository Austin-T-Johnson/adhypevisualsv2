import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import artists from "./JSON/artists.json";
const AdhypeMain = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setFadeIn(true);
    }, 200);
    return () => clearTimeout(fadeInTimeout);
  }, []);

  return (
    <>
    <Spline scene="https://prod.spline.design/8EnHycveQuxkTWWh/scene.splinecode" />
      {/* <div
        className={` ${
          fadeIn ? "opacity-100" : "opacity-0"
        } top-pic transition-opacity duration-500 text-white text-[40px] font-['Raleway'] font-extrabold px-[50px] text-center`}
      ></div>
      <div
        className={` ${
          fadeIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 text-white text-[40px] font-['Raleway'] font-extrabold px-[50px] text-center adhype-container`}
      >
        <h1>Adhype Visuals</h1>
        <h2
          className={` ${
            fadeIn ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 text-white text-[40px] font-['Raleway'] font-extrabold px-[50px] text-center description`}
        >
          Your one-stop shop for <br />
          <br />
          Visual Content, Web Design, Creative Direction, Graphic Design &
          Branding
        </h2>
      </div>
      <div className="background">
        <div className="flex w-full justify-center p-[50px]">
          <span
            className={` ${
              fadeIn ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 text-white text-[40px] font-['Raleway'] font-extrabold px-[50px] text-center `}
          >
            ARTISTS WE HAVE WORKED WITH
          </span>
        </div>
        {artists.map((artist, idx) => {
          return (
            <div className="w-full flex">
            <div className="parent" index={idx}>
              <div className="card">
                <div className="content-box">
                  <span className="card-title">{artist.txt}</span>
                  <img src={artist.img} className="card-content" alt=""/>
                </div>
                <div className="date-box">
                  <span className="month">{artist.month}</span>
                  <span className="date">{artist.year}</span>
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default AdhypeMain;
