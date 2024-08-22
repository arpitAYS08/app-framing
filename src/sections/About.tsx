"use client";

import React, { useState, useEffect } from "react";
import { rightIcon } from "../app/assets";
import Image from "next/image";
import Reveal from "../components/common/Reveal";

const About = () => {
  const steps = [
    {
      number: 1,
      title: "Request Your Access to the Platform",
      description:
        "It's free! Simply provide your email address, and we'll share the access details with you.",
    },
    {
      number: 2,
      title: "Configure a Few Parameters",
      description: (
        <>
          <b className="font-bold">Identify the Actors:</b> Define who the key actors are in your
          organization.
          <br />
          <b className="font-bold">Select Your Data Sources:</b> Choose the data sources or files
          you want to use as your knowledge base.
        </>
      ),
    },
    {
      number: 3,
      title: "Provide Access to Your Team",
      description: "Grant your team members the ability to access and utilize the information.",
    },
    {
      number: 4,
      title: "Leverage AI-Powered Features",
      description:
        "Your team is now ready to take full advantage of AI-powered capabilities, automatically prepare notes, and boost their productivity.",
    },
  ];

  const cards = [
    {
      title: "AI-Driven Insights",
      description:
        "Harness the power of AI to find and utilize important information quickly and efficiently. Seamlessly integrate the 'Q&A widget' into your existing apps, enabling users to ask questions and get precise answers directly from the knowledge base.",
    },
    {
      title: "Summarization",
      description:
        "Generate concise summaries of lengthy documents, ensuring you get the key insights without the noise.",
    },
    {
      title: "Information Comparison",
      description:
        "Compare data across multiple sources to identify patterns, discrepancies, or correlations.",
    },
    {
      title: "Relevant Data Extraction",
      description:
        "Extract specific, relevant information from chosen sources or documents, tailored to your needs.",
    },
    {
      title: "Role-Based Access",
      description:
        "Ensure that the right people have access to the right information with customizable role-based access controls.",
    },
    {
      title: "Restricted Information Handling",
      description:
        "Securely manage and restrict access to sensitive information, maintaining compliance and privacy.",
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id={"about"} className="about bg-white scroll-smooth">
      <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <Reveal width="100%">
        <h1 className="text-3xl font-bold">What is App Framing?</h1>
        </Reveal>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-justify mt-6">
        <Reveal>
          <p className="mb-8">
            App Framing is a powerful platform designed to make your enterprise applications
            AI-enabled. It allows you to effortlessly retrieve, compare, and summarize crucial
            information from various knowledge sources. Whether you're looking to enhance
            decision-making, streamline operations, or improve customer service, App Framing is your
            customizable solution.
          </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              
              <div
                key={index}
                className="bg-light-color p-8 rounded-xl text-black shadow-lg bg-opacity-90 transition-transform duration-300 ease-in-out hover:shadow-xl hover:bg-secondary hover:bg-opacity-100 hover:text-white transform hover:scale-105 flex flex-col">
                  <Reveal>
                <h4 className="text-center  text-xl font-semibold mb-2">{card.title}</h4>
                </Reveal>
                <Reveal>
                <p className="mt-1 ">{card.description}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <Reveal width="100%">
        <h1 className="text-3xl font-bold text-center mb-8">How Does It Work?</h1>
        </Reveal>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <ul className="relative z-2">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`mb-12 transition-transform duration-500 ease-in-out transform ${
                  currentStep === index
                    ? "scale-105 bg-[#214245] bg-opacity-90 text-white rounded-lg"
                    : "scale-100"
                }`}>
                  <Reveal>
                <div className="flex items-center p-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`flex items-center justify-center w-12 h-12 text-white rounded-full ${
                        currentStep === index ? "bg-black" : "bg-black"
                      } transition-transform duration-500 ease-in-out`}>
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4
                      className={`text-lg font-semibold ${
                        currentStep === index ? "text-white" : "text-gray-800"
                      }`}>
                      {step.title}
                    </h4>
                    <h6
                      className={`mt-2 ${
                        currentStep === index ? "text-gray-200" : "text-gray-700"
                      }`}>
                      {step.description}
                    </h6>
                  </div>
                </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <Reveal width="100%">
        <a
          href="/contact"
          className="block mt-8 text-center px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-secondary transition-colors duration-300">
          Click Here to Get Your Access
        </a>
        </Reveal>
      </div>

            <Reveal width="100%">
      <div className="py-16 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 bg-gradient-to-r from-green-100 to-blue-100">
      <Reveal width="100%">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Are You a SaaS Provider?
        </h1>
        </Reveal>
        <div className="text-justify text-gray-600 space-y-8">
        <Reveal width="100%">
          <p className="text-lg">
            We understand that as a SaaS provider, you face unique challenges in delivering AI
            features tailored to the diverse needs of your customers. Integrating powerful AI
            capabilities with your customers' existing infrastructure and technology stacks requires
            careful planning and expertise. Our extensive experience in SaaS development and
            architecture enables us to seamlessly integrate AI capabilities into your existing
            customer base, with minimal or no rearrangement of your systems.
          </p>
            </Reveal>
          <div>
          <Reveal width="100%">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Considerations</h2>
            </Reveal>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal width="100%">
              <li>
                <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />
                  Current Service Architecture
                </h4>
                <p className="text-base text-gray-600">
                  Evaluating and optimizing your existing architecture to support AI integration.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">

              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />
                  Providing Access to AI Features
                </h4>
                <p className="text-base text-gray-600">
                  Designing solutions to provide AI capabilities as a SaaS provider.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">
              <li>
                
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />Parameter Configuration</h4>
                <p className="text-base text-gray-600">
                  Facilitating easy configuration of AI parameters for your customers.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">
              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />
                  Integration with Backend and Frontend
                </h4>
                <p className="text-base text-gray-600">
                  Ensuring seamless integration with your customers' systems.
                </p>
              </li>
              </Reveal>
            </ul>
          </div>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-900" />
          <div>
          <Reveal width="100%">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Methodical and Collaborative Approach
            </h2>
            </Reveal>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal width="100%">
              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />Assessment and Planning</h4>
                <p className="text-base text-gray-600">
                  We conduct a detailed assessment of your existing infrastructure to identify key
                  integration points.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">
              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />
                  Microservices Reorganization
                </h4>
                <p className="text-base text-gray-600">
                  Restructure your microservices architecture to create a more flexible and scalable
                  environment for AI models.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">
              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />
                  Wrapper AI Service Development
                </h4>
                <p className="text-base text-gray-600">
                  Develop a wrapper service to encapsulate AI models, ensuring seamless integration
                  into your customer’s architecture.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">
              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />SDK Implementation</h4>
                <p className="text-base text-gray-600">
                  Create comprehensive Node and Java SDKs, complete with clear documentation and
                  examples for easy integration.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">
              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />
                  User Interface Development
                </h4>
                <p className="text-base text-gray-600">
                  Design and develop a React-based parameter setting tool, offering an intuitive
                  interface for users to configure AI parameters.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">
              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" />CI/CD Pipeline Setup</h4>
                <p className="text-base text-gray-600">
                  Implement GitHub actions to automate testing, building, and deployment processes,
                  ensuring smooth CI/CD workflows.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">
              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" /> Quality Assurance</h4>
                <p className="text-base text-gray-600">
                  Conduct rigorous end-to-end QA testing to validate the integration and
                  functionality of the AI services.
                </p>
              </li>
              </Reveal>
              <Reveal width="100%">
              <li>
              <h4 className="text-xl font-medium text-gray-900 mb-2 flex items-center gap-2">
              <Image src={rightIcon} style={{ width: 20, height: 20 }} alt="right" /> Deployment Automation</h4>
                <p className="text-base text-gray-600">
                  Utilize deployment scripts to automate the provisioning and deployment of
                  resources on AWS, ensuring efficient and reliable deployment.
                </p>
              </li>
              </Reveal>
            </ul>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
};

export default About;
