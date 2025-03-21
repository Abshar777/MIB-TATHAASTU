import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Make cursor visible when mouse moves
      cursorRef.current?.classList.add("-visible");

      gsap.to(cursorRef.current, {
        x,
        y,
        force3D: true,
        overwrite: true,
        ease: "expo.out",
        duration: 0.7,
      });
    };

    const setState = (state: string) => {
      cursorRef.current?.classList.add(state);
    };

    const removeState = (state: string) => {
      cursorRef.current?.classList.remove(state);
    };

    const setText = (text: string) => {
      if (textRef.current) {
        textRef.current.innerHTML = text;
        cursorRef.current?.classList.add("-text");
      }
    };

    const removeText = () => {
      cursorRef.current?.classList.remove("-text");
    };

    // Initialize cursor
    if (cursorRef.current) {
      // Start with cursor hidden
      cursorRef.current.classList.add("-hidden");

      // Add default visible state when page loads
      setTimeout(() => {
        cursorRef.current?.classList.add("-visible");
        cursorRef.current?.classList.remove("-hidden");
      }, 500);
    }

    // Add event listeners
    document.addEventListener("mousemove", moveCursor);
    function handleCursorState(
      element: HTMLElement,
      type: string,
      set: boolean
    ) {
      if (type === "cursor") {
        // console.log(element.dataset?.cursor,"ajajaja");
        if (set) {
          setState(element.dataset?.cursor as string);
        } else {
          removeState(element.dataset?.cursor as string);
        }
      } else {
        console.log(element.dataset?.cursorText,"ajajaja");
        if (set) {
          setText(element.dataset?.cursorText as string);
        } else {
          removeText();
        }
      }
    }
    const datasetElements = document.querySelectorAll("[data-cursor]");
    datasetElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        handleCursorState(element as HTMLElement, "cursor", true);
      });
      element.addEventListener("mouseleave", () => {
        handleCursorState(element as HTMLElement, "cursor", false);
      });
    });
    const datasetElementsText = document.querySelectorAll("[data-cursor-text]");
    datasetElementsText.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        handleCursorState(element as HTMLElement, "cursorText", true);
      });
      element.addEventListener("mouseleave", () => {
        handleCursorState(element as HTMLElement, "cursorText", false);
      });
    });
    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cb-cursor pointer-events-none">
      <div ref={textRef} className="cb-cursor-text pointer-events-none"></div>
    </div>
  );
};

export default Cursor;
