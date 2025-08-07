import React, { lazy, Suspense } from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Lazy load components that aren't immediately visible
const Collaboration = lazy(() => import("./components/Collaboration"));
const Benefits = lazy(() => import("./components/Benefits"));
const Roadmap = lazy(() => import("./components/Roadmap"));
// Uncomment and lazy load these when needed
// const Services = lazy(() => import("./components/Services"));
// const Pricing = lazy(() => import("./components/Pricing"));

// Create a loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        
        {/* Wrap lazy-loaded components with Suspense and fallback */}
        <Suspense fallback={<LoadingSpinner />}>
          <Collaboration />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Benefits />
        </Suspense>
        
        {/* Uncomment and add Suspense wrapper when needed */}
        {/* <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense> */}
        
        {/* <Suspense fallback={<LoadingSpinner />}>
          <Pricing />
        </Suspense> */}
        
        <Suspense fallback={<LoadingSpinner />}>
          <Roadmap />
        </Suspense>
        
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;