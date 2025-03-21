import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import gsap, { Power2, Back } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CustomSplitText from "../../utils/splitText"; // Import your custom SplitText
import Cursor from "../global/magicCursor";
import Preloader from "../global/preloader";
import Header from "../global/header";
import FooterCTA from "../global/footerCta";
import Footer from "../global/footer";

// Register ScrollTrigger immediately after importing
gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  const location = useLocation();
  
  useGSAP(() => {
    gsap.utils.toArray(".text-anime-style-1").forEach((e: any) => {
      let staggerAmount = 0.05,
        delayValue = 0.5;
      let animationSplitText = new CustomSplitText(e, { type: "words" });
      gsap.from(animationSplitText.words, {
        duration: 1,
        delay: delayValue,
        x: 20,
        autoAlpha: 0,
        stagger: staggerAmount,
        scrollTrigger: { trigger: e, start: "top 85%" },
      });
    });

    gsap.utils.toArray(".text-anime-style-2").forEach((e: any) => {
      let staggerAmount = 0.03,
        translateXValue = 20,
        delayValue = 0.1;
      let animationSplitText = new CustomSplitText(e, { type: "chars,words" });
      gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: delayValue,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount,
        ease: Power2.easeOut,
        scrollTrigger: { trigger: e, start: "top 85%" },
      });
    });

    gsap.utils.toArray(".text-anime-style-3").forEach((element: any) => {
      if (element.animation) {
        element.animation.progress(1).kill();
        element.split.revert();
      }

      element.split = new CustomSplitText(element, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      gsap.set(element, { perspective: 400 });

      gsap.set(element.split.chars, {
        opacity: 0,
        x: "50",
      });

      element.animation = gsap.to(element.split.chars, {
        scrollTrigger: { trigger: element, start: "top 90%" },
        x: "0",
        y: "0",
        rotateX: "0",
        opacity: 1,
        duration: 1,
        ease: Back.easeOut,
        stagger: 0.02,
      });
    });

    // Fade in animations
    gsap.utils.toArray(".fade-in-text").forEach((element: any) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Reveal animations
    gsap.utils.toArray(".reveal").forEach((container: any) => {
      let image =
        container.querySelector("img") || container.querySelector("video");

      if (!image) return; // Skip if no image is found

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        xPercent: -100,
        duration: 1,
        ease: Power2.easeOut,
      });
      tl.from(image, {
        xPercent: 100,
        scale: 1,
        duration: 1,
        delay: -1,
        ease: Power2.easeOut,
      });
    });
  }, [location]);
  
  return (
    <>
      <Cursor />
      <div className="md:block hidden">
      <Preloader />
      </div>
      <Header />
      <Outlet />
      <FooterCTA />
      <Footer />
    </>
  );
};

export default Layout;