import FAQ from "../sections/FAQ";
import Home1 from "../sections/Home1";
import Testimonials from "../sections/Testimonials";
import About from "../sections/About";
import Service from "../sections/Service";
import TutorialSection from "../sections/TutorialSection";





export default function Home() {
  return (
    <>
      <Home1/>
      <About/>
      {/* <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" /> */}
      <Service/>
      <TutorialSection/>
      {/* <Testimonials/> */}
      <FAQ/>
    </>
  );
}
