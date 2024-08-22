"use client";

import React from "react";
import { useInView, useAnimation} from 'framer-motion'
import Reveal from "../components/common/Reveal";


const Service = () => {

    const ref = React.useRef();
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    React.useEffect(()=>{
        if(isInView){
            mainControls.start('visible');
            slideControls.start('visible');
        }
    },[isInView])
  return (
    <section ref={ref} id="service" className="service bg-white py-12 scroll-smooth">
      <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
      <Reveal width="100%">
        <h1 className="text-center text-heading-color font-semibold text-3xl mb-10">
          What we provide?
        </h1>
        </Reveal>
        <Reveal width="100%">
        <p className="text-center text-lg mb-12">
        The App Framing platform is your one-stop solution for AI-enabled applications, offering seamless integration, comprehensive support, and customized tools to enhance your enterprise's AI capabilities.
        </p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
             <div
             key={index}
             className="bg-light-color p-8 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:bg-secondary hover:bg-opacity-100 hover:text-white transform hover:scale-105"
           >
             <div className="flex justify-center mb-6">
               <img src={service.icon} alt={service.title} className="w-8 h-auto" />
             </div>
             <Reveal width="100%">
             <h4 className="text-center text-xl font-semibold mb-4">{service.title}</h4>
             </Reveal>
             <Reveal width="100%">
              
             <p className="text-center">{service.description}</p>
             </Reveal>
           </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

const services = [
  {
    title: "AI/ML Operations",
    description:
      "Comprehensive AI and machine learning operations to ensure seamless deployment, monitoring, and optimization of AI models within your enterprise.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_5.png",
  },
  {
    title: "Custom Integration",
    description:
      "Tailored integration services to embed AI capabilities into your existing infrastructure, ensuring smooth interoperability and minimal disruption.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_2.png",
  },
  {
    title: "App-Framing Customization",
    description:
      "Personalized customization of the App Framing platform to meet your unique business requirements and operational needs.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_5.png",
  },
  {
    title: "SDK Development",
    description:
      "Development of Software Development Kits (SDKs) to facilitate easy integration and utilization of AI features across various applications and platforms.",
    icon: "	https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_4.png",
  },
  {
    title: "End-to-End Solution Implementation",
    description:
      "Full-cycle implementation services, from initial assessment to deployment, ensuring your AI initiatives are successful and scalable.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_5.png",
  },
  {
    title: "Ongoing Support and Maintenance",
    description:
      "Dedicated support and maintenance services to keep your AI-driven applications running smoothly and effectively over time.",
    icon: "https://cgadvantage.com/wp-content/themes/homedroid/assets/images/icon_6.png",
  },
];
