"use client";

import { useState } from "react";
// import { Field, Label, Switch } from "@headlessui/react";

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    company: false,
    email: false,
    message: false,
  });

  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !formData.email,
      company: !formData.company,
      message: !formData.message,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors for the field being edited
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("heelo");

    if (!validateForm()) {
      // alert("Please fill all mandatory fields and agree to the policy.");
      return;
    }
    console.log("heelo1");
    try {
      const res = await fetch("https://api.airtable.com/v0/appSv5yEjxUB79Rn1/Sheet1", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer patMOQet8xS7wLwrI.d933051b4190e30b5d6877b1d48d8a712a10c06c28c7785fee32b0a1e5431407",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                firstName: "Arpit",
                lastName: "Singh",
                company: "AYS",
                email: "arpit.singh@ayssoftwaresolution.com",
                message: "hueet",
                phoneNumber: "9238898293",
              },
            },
          ],
        }), // Passing FormData directly
      });

      const data = await res.json();
      if (data) {
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
          setFormData({
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
        }, 3000); // 3 seconds
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // const handlePrivacyPolicyClick = () => {
  //   window.open("https://your-privacy-policy-url.com", "_blank");
  // };

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-10 lg:px-8 mt-10 z-0">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[20rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get Your Access Key:
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          "Reach Out to Us – We're Here to Help!"
        </p>
      </div>
      {showThankYou ? (
        <div className="mx-auto max-w-xl sm:mt-20 text-center">
          <p className="text-lg font-semibold text-gray-900">
            Thank you for reaching out! We will get back to you soon.
          </p>
        </div>
      ) : (
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.firstName ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">First name is required.</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.lastName ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">Last name is required.</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-gray-900">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="App Framing"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500">Company is required.</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  {/* <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg> */}
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.email ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
                  placeholder="Email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">Email is required.</p>}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number <span className="text-gray-400">(optional)</span>
              </label>
              <div className="mt-2.5">
                <input
                  id="phone-number"
                  placeholder="38392090029"
                  name="phoneNumber"
                  type="text"
                  autoComplete="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.message ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">Message is required.</p>
                )}
              </div>
            </div>
            {/* <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={()=>setAgreed(!agreed)}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600">
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-black hover:underline">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field> */}
          </div>
          <div className="mt-10">
            {true ? (
              <button
                type="submit"
                className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray disabled:cursor-not-allowed">
                Let's talk
              </button>
            ) : (
              <button
                type="submit"
                disabled
                className="block w-full rounded-md bg-gray-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray disabled:cursor-not-allowed">
                Let's talk
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
