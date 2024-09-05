"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address."
    )
    .required("Email is required"),
  message: Yup.string().required("Please write your message"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bgColor, setBgColor] = useState("bg-[#5E3BEE]");
  const [messageSuccess, setMessageSuccess] = useState("w-[0%]");

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema, // Apply the validation schema
    onSubmit: (values, action) => {
      // action.resetForm();
    },
  });

  const handleCombinedSubmit = async (event: any): Promise<void> => {
    handleSubmit(event);
    setMessage("");
    setBgColor("bg-[#5E3BEE]");

    if (!values.name.length || !values.email.length || !values.name.length) {
      return;
    }

    if (errors.name || errors.email || errors.message) {
      return;
    }

    // Revalidate the email before submitting
    if (!Yup.string().email().isValidSync(values.email)) {
      setBgColor("bg-red-500");
      setMessage("Please enter a valid email address.");
      setMessageSuccess("w-[100%]");
      return;
    }

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);
      setMessage("Submitting form...");
      setMessageSuccess("w-[10%]");
      const response = await fetch("/api/formsubmit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setBgColor("bg-green-500");
        setMessage("Thank you for contacting!");
        setMessageSuccess("w-[100%]");
        resetForm();
      } else {
        setBgColor("bg-red-500");
        setMessage("Message not submitted!");
        setMessageSuccess("w-[100%]");
      }
    } catch (error) {
      setBgColor("bg-red-500");
      setMessage("Thank you for showing interest!");
      setMessageSuccess("w-[100%]");
      console.error("Error:", error);
    } finally {
      setUploading(false);
      setTimeout(() => {
        setMessage("");
      }, 12000);
    }
  };

  return (
    <section className="bg-[#F5FCFF]" id="contact">
      <div className="px-24 pb-6 md:pb-16 bg-[linear-gradient(245deg,rgba(245,252,255,0.00_1.85%,#F5FCFF_65.77%),#F5FCFF)] max-md:px-5">
        <div className="flex flex-col items-center pt-6 sm:pt-16 pb-6 border-t-2 border-black border-opacity-10 max-md:max-w-full">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-20 xl:gap-36 items-start max-md:max-w-full">
            <div className="flex flex-col items-start min-w-[240px] max-w-[360px]">
              <div className="flex flex-col w-full">
                <h2 className="md:text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(274deg,#5E3BEE_44.65%,#B416FF_97.09%)] text-2xl sm::text-4xl pb-1">
                  Let’s work together
                </h2>
                <p className="mt-3 md:mt-6 text-base md:text-xl leading-6 md:leading-8 text-gray-800">
                  We are committed to processing the information in order to
                  contact you and talk about your project.
                </p>
              </div>
              <div className="lg:flex gap-4 items-center mt-8 w-44 max-w-full hidden">
                <Link
                  href="https://www.facebook.com/AdnanGhaffarCh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/facebook.svg"
                    alt="facebook"
                    width={32}
                    height={32}
                    className="object-contain shrink-0 self-stretch my-auto w-8 rounded-md aspect-square"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/itsadnanghaffar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="instagram"
                    width={32}
                    height={32}
                    src="/instagram-form.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-8 rounded-md aspect-square"
                  />
                </Link>
                <Link
                  href="https://twitter.com/adnanghaffar007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="twitter"
                    width={32}
                    height={32}
                    src="/twitter-form.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-8 rounded-md aspect-square"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/adnanghaffar007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="linkedIn"
                    width={32}
                    height={32}
                    src="/linkedIn-form.svg"
                    className="object-contain shrink-0 self-stretch my-auto w-8 rounded-md aspect-square"
                  />
                </Link>
              </div>

              <div className="lg:flex gap-4 items-center pr-4 mt-8 uppercase tracking-[2px] hidden">
                <Image
                  alt="Adnan Profile"
                  src="/contact-form.png"
                  width={80}
                  height={80}
                  className="object-contain shrink-0 self-stretch my-auto w-20 rounded-lg aspect-square"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <p className="text-xl leading-none text-gray-800">
                    Adnan Ghaffar
                  </p>
                  <p className="mt-2 text-sm leading-4 text-zinc-900 text-opacity-70">
                    Full Stack &<br />
                    Automation
                    <br />
                    developer
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col min-w-[240px] w-[530px] max-md:max-w-full">
              <div className="flex flex-col w-full text-lg leading-loose text-gray-800 max-w-[530px] max-md:max-w-full">
                <form onSubmit={handleCombinedSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="flex-1 shrink gap-2.5 px-8 py-3 md:py-5 w-full whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full"
                    />
                    {errors.name && touched.name ? (
                      <p className="text-xs text-red-600 mt-2">{errors.name}</p>
                    ) : null}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="flex-1 shrink gap-2.5 px-8 py-3 md:py-5 mt-5 w-full whitespace-nowrap bg-white rounded-lg border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full"
                    />
                    {errors.email && touched.email ? (
                      <p className="text-xs text-red-600 mt-2">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Type your message here"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="flex-1 shrink gap-2.5 px-8 py-3 md:py-5 mt-5 w-full leading-7 bg-white rounded-lg border border-solid border-black border-opacity-10 max-md:px-5 max-md:max-w-full"
                      rows={4}
                    ></textarea>
                    {errors.message && touched.message ? (
                      <p className="text-xs text-red-600">{errors.message}</p>
                    ) : null}
                  </div>
                  <button
                    className={`gap-2.5 self-start text-base px-4 xl:px-3 2xl:px-6 py-4 2xl:py-5 mt-10 md:text-2xl text-white rounded-lg bg-gradient-to-r from-[#B416FF] to-[#5E3BEE] hover:from-[#5E3BEE] hover:to-[#B416FF] ${
                      uploading ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    type="submit"
                    disabled={uploading}
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div>
                <div className="flex gap-4 items-center mt-6 md:mt-8 w-44 max-w-full lg:hidden">
                  <Link
                    href="https://www.facebook.com/AdnanGhaffarCh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/facebook.svg"
                      alt="facebook"
                      width={32}
                      height={32}
                      className="object-contain shrink-0 self-stretch my-auto w-5 md:w-8 rounded-md aspect-square"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/itsadnanghaffar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt="instagram"
                      width={32}
                      height={32}
                      src="/instagram-form.svg"
                      className="object-contain shrink-0 self-stretch my-auto w-5 md:w-8 rounded-md aspect-square"
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/adnanghaffar007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt="twitter"
                      width={32}
                      height={32}
                      src="/twitter-form.svg"
                      className="object-contain shrink-0 self-stretch my-auto w-5 md:w-8 rounded-md aspect-square"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/adnanghaffar007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt="linkedIn"
                      width={32}
                      height={32}
                      src="/linkedIn-form.svg"
                      className="object-contain shrink-0 self-stretch my-auto w-5 md:w-8 rounded-md aspect-square"
                    />
                  </Link>
                </div>

                <div className="flex gap-4 items-center pr-4 mt-6 md:mt-8 uppercase tracking-[2px] lg:hidden">
                  <Image
                    alt="Adnan Profile"
                    src="/contact-form.png"
                    width={80}
                    height={80}
                    className="object-contain shrink-0 self-stretch my-auto w-20 rounded-lg aspect-square"
                  />
                  <div className="flex flex-col self-stretch my-auto">
                    <p className="text-xl leading-none text-gray-800">
                      Adnan Ghaffar
                    </p>
                    <p className="mt-2 text-sm leading-4 text-zinc-900 text-opacity-70">
                      Full Stack &<br />
                      Automation
                      <br />
                      developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {message && (
        <div
          className={`fixed top-14 lg:top-5 right-5 ${bgColor} py-[10px] px-[20px] rounded-lg shadow-lg w-[270px] sm:w-[450px] z-[1000]`}
        >
          <div
            className={`h-1 bg-white mb-2 transition-all duration-500 ${messageSuccess}`}
          ></div>
          <div className="flex justify-between">
            <p className="message text-xs sm:text-base">{message}</p>
            <div>
              <Image
                src="/close-icon.png"
                alt="close"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => setMessage("")}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
