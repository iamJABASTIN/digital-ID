import { useState, useRef, useEffect, lazy, Suspense } from "react";
import { brainwaveSymbol, smallSphere, stars, vscode } from "../assets";
import { collabApps, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";

// Lazy load the curve components since they're decorative
const LeftCurve = lazy(() =>
  import("./design/Collaboration").then((module) => ({
    default: module.LeftCurve,
  }))
);
const RightCurve = lazy(() =>
  import("./design/Collaboration").then((module) => ({
    default: module.RightCurve,
  }))
);

// Create a LazyImage component for better performance
const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(imgRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`overflow-hidden ${className || ""}`}
      style={{
        background: isLoaded ? "none" : "#f3f4f6",
        minHeight: props.height ? `${props.height}px` : "200px",
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      )}
    </div>
  );
};

// Create a loading fallback component
const LoadingFallback = () => (
  <div
    className="animate-pulse bg-n-6 rounded-full"
    style={{ width: "100%", height: "100%" }}
  ></div>
);

const Collaboration = () => {
  return (
    <Section crosses id="about">
      {/* Visual Section with Sphere and Stars - Lazy loaded since it's decorative */}
      <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
        <LazyImage
          src={smallSphere}
          className="relative z-1"
          width={255}
          height={255}
          alt="Sphere"
        />
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <LazyImage
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
      </div>

      {/* Collaboration Content */}
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">About Me</h2>
          <p className="max-w-[22rem] mb-10 md:mb-14 body-2 text-n-4 text-justify">
            Passionate Junior Software Developer with a strong foundation in
            building efficient and scalable applications. Eager to apply my
            skills in software development, problem-solving, and collaboration
            to contribute to innovative projects and enhance business
            efficiency.
          </p>
          <Button href="https://www.linkedin.com/in/iamjabastin/">
            Let's Connect
          </Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  {/* This image is central to the design, so we'll keep it as a regular img but optimize it */}
                  <img
                    src={vscode}
                    width={48}
                    height={48}
                    alt="VS Code"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    {/* Lazy load the app icons since they're decorative */}
                    <LazyImage
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* Lazy load the decorative curve components */}
            <Suspense fallback={<LoadingFallback />}>
              <LeftCurve />
              <RightCurve />
            </Suspense>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
