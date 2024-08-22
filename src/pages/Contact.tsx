// src/pages/Contact.tsx
import React from "react";
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <section className=" text-black px-5 py-10 md:py-16 gap-4 md:px-10 bg-[#FCEDC6] flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
          <div>
            <div className="flex items-center gap-4 text-[#1D2130]">
              <div className="border border-black h-[1px] w-12" />
              <p className="text-sm md:text-base font-bold">TOP NEWS</p>
            </div>
            <div className="pt-6 md:pt-8 px-2">
              <h1 className="font-bold text-2xl md:text-5xl mb-4 md:mb-12">
                We'd love to hear from you
              </h1>
              <p className="font-normal text-sm md:text-base mb-6 md:mb-9 text-[#525560]">
                Have any question in mind or want to enquire? Please feel free
                to contact us through the form or the following details.
              </p>
            </div>
          </div>
          <div className="text-[#1D2130] flex flex-row md:flex-col gap-6 pt-12 justify-between md:justify-center">
            <div>
              <p className="mb-3 font-bold text-2xl">Let's Talk!</p>
              <p className="text-base font-normal">+234 09012346514</p>
              <p className="text-base font-normal">hello@largerthani.com</p>
            </div>
            <div>
              <p className="mb-3 font-bold text-2xl">Headoffice</p>
              <p className="text-base font-normal">8 Brewery Drive, Lagos, </p>
              <p className="text-base font-normal">Nigeria</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-row self-start space-x-4 md:self-center lg:self-start text-[#1D2130]">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 hover:text-blue-800" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-6 h-6 hover:text-black" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-blue-900" />
          </a>
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default Contact;
