import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex justify-center bg fleh-screen items-center preloader">
      <h1
        ref={textRef}
        className="text-4xl text-center text-white w-full font-bold md:w-1/2"
      >
        “We will help you cross over from Maybe to May It Be.”
      </h1>
    </div>
  );
};

export default Preloader;
